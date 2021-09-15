#include <amqpcpp.h>
#include <amqpcpp/libuv.h>
#include "./handler.cpp"
#include <jsoncpp/json/json.h>
#include "models/simulator.cpp"

int main()
{
    // access to the event loop
    auto *loop = uv_default_loop();

    // handler for libev
    MyHandler handler(loop);

    // make a connection

    AMQP::TcpConnection connection(&handler, AMQP::Address("amqp://guest:guest@localhost/"));

    // we need a channel too
    AMQP::TcpChannel channel(&connection);

    // create a temporary queue
    std::string queue_name = "sensor_control";

    // create a simulator object

    Simulator *simulator = new Simulator();

    // channel consuming
    channel.consume(queue_name)
        .onMessage([&channel, &simulator](const AMQP::Message &message, uint64_t deliveryTag, bool redelivered)
                   {
                       std::string messageBody = message.body();
                       const std::string messageJson = messageBody.substr(0, messageBody.find('}') + 1);
                       std::cout << "message received" << std::endl;
                       std::cout << messageJson << std::endl;
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
                       const std::string online = root["online"].asString();

                       cout << root.asString() << endl;
                       //    Device *device = new Device(id, online);
                       //    simulator->getDevice().insert({device->getId(), *device});

                       //    cout << simulator->getDevice().size() << endl;

                       channel.ack(deliveryTag);
                   })
        .onData([](const char *data, size_t size) {})
        .onSuccess([](const std::string &consumertag)
                   { std::cout << "consume operation started " << consumertag << std::endl; })
        .onError([](const std::string message)
                 { std::cout << "consume operation started" << std::endl; });

    // run the loop
    uv_run(loop, UV_RUN_DEFAULT);

    // done
    return 0;
}