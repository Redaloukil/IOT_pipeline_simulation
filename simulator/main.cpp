#include <amqpcpp.h>
#include <amqpcpp/libuv.h>
#include <jsoncpp/json/json.h>
#include <thread>

#include "models/simulator.h"
#include "models/device.h"
#include "handler.cpp"

using namespace std;

void simulator_thread(map<string,Device> *devices, AMQP::TcpConnection* connection){
    bool run = true;
    AMQP::TcpChannel channel(connection);

    for(;;) {
        for (std::map<string,Device>::iterator iter = devices->begin(); iter != devices->end();iter++) {
            std::cout << iter->first << " => " << iter->second.getId() << '\n';
            channel.publish("", "sensor_data",iter->second.getId());
        }
        sleep(2);
    }
}

int main()
{
    std::mutex mutex;
    auto *loop = uv_default_loop();

    map<string,Device> devices;
    MyHandler handler(loop);

    AMQP::TcpConnection connection(&handler, AMQP::Address("amqp://guest:guest@localhost/"));
    AMQP::TcpChannel channel(&connection);

    std::string queue_name = "sensor_control";
    std::thread t(simulator_thread, &devices, &connection);
    
    channel
        .consume(queue_name)
        .onMessage([&channel, &devices, &mutex ](const AMQP::Message &message, uint64_t deliveryTag, bool redelivered)
                   {
                        // get amqp message body
                        std::string messageBody = message.body();
                        // extract message json from body
                        const std::string messageJson = messageBody.substr(0, messageBody.find('}') + 1);
                        // cout message json
                        std::cout << messageJson << std::endl;
                        // root and reader
                        Json::Value root;
                        Json::Reader reader;
                        
                        try
                        {
                            reader.parse(messageJson, root);
                        }
                        catch (const Json::LogicError &e)
                        {
                            std::cerr << e.what() << '\n';
                        }
                        
                        // getting the data event
                        std::string command = root["command"].asString();
                        std::string id = root["payload"]["_id"].asString();
                        std::string status = root["payload"]["online"].asString();

                        bool online;

                        if (status == "true") {
                           online = true;
                        } else {
                           online = false;
                        }
                        
                        if(command == "STOP"){
                            try {
                                devices.erase(id);
                            } catch (...) {
                                throw;
                            }
                        }else if (command == "START") {
                            Device* device = new Device(id,false);
                            if (devices.find(id) == devices.end()) {
                                cout << "Insert device with id" << device->getId() << " " << device->getOnline() << std::endl;
                                try {
                                    devices.insert(make_pair(id, *device));
                                } catch(...) {
                                    throw;
                                }
                            } else {
                                std::cout << "device already exists in device" << endl;
                            }
                            devices.insert(make_pair(id,*device));
                        }
                        cout << "Number of devices" << devices.size() << endl;
                        channel.ack(deliveryTag);
                    })
                    .onData([](const char *data, size_t size) 
                        {
                            //
                        })
                    .onSuccess([](const std::string &consumertag)
                        { 
                            std::cout << "consume operation started " << consumertag << std::endl; 
                        })
                    .onError([](const std::string message)
                        { 
                            std::cout << "consume operation stopped" << std::endl; 
                        })
                    .onFinalize([]() 
                        { 
                            std::cout << "listening process stopped" << std::endl; 
                        });
   
    uv_run(loop, UV_RUN_DEFAULT);
    t.join();

    return 0;
}