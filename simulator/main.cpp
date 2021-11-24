#include <amqpcpp.h>
#include <amqpcpp/libuv.h>
#include <jsoncpp/json/json.h>
#include "models/simulator.h"
#include "models/device.h"
#include "handler.cpp"


int main()
{
    auto *loop = uv_default_loop();

    MyHandler handler(loop);

    AMQP::TcpConnection connection(&handler, AMQP::Address("amqp://guest:guest@localhost/"));

    AMQP::TcpChannel channel(&connection);

    std::string queue_name = "sensor_control";

    Simulator *simulator = new Simulator();

    channel.consume(queue_name)
        .onMessage([&channel, &simulator](const AMQP::Message &message, uint64_t deliveryTag, bool redelivered)
                   {
                       // get amqp message body  
                       std::string messageBody = message.body();
                       // extract message json from body
                       const std::string messageJson = messageBody.substr(0, messageBody.find('}') + 1);
                       // cout received message
                       std::cout << "message received" << std::endl;
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
                        const std::string id = root["_id"].asString();
                        const std::string status = root["online"].asString();

                        bool online;
                        if (status == "true")
                        {
                           online = true;
                        }
                        else
                        {
                           online = false;
                        }
                        
                        Device* device = new Device(id,online);
                        simulator->addDevice(id, *device);
                        channel.ack(deliveryTag);


                        
                   })
        .onData([](const char *data, size_t size) {})
        .onSuccess([](const std::string &consumertag)
                   { std::cout << "consume operation started " << consumertag << std::endl; })
        .onError([](const std::string message)
                 { std::cout << "consume operation stopped" << std::endl; });

    // run the loop
    uv_run(loop, UV_RUN_DEFAULT);

    // done
    return 0;
}