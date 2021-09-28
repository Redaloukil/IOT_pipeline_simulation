#include <bits/stdc++.h>
#include <pthread.h>
#include <amqpcpp.h>
#include <amqpcpp/libuv.h>

#ifdef _WIN32
#include <Windows.h>
#else
#include <unistd.h>
#endif
#include <cstdlib>

/*
    class Device

    represents a simulator device, which is an entity that will generate random events.
/**/
using namespace std;

void *generateData(void *);

class Device
{
private:
    std::string id;
    bool online;
    pthread_t runner;

public:
    std::string getId()
    {
        return this->id;
    };

    const void setId(std::string id)
    {
        this->id = id;
    }
    bool getOnline()
    {
        return this->online;
    };
    void setOnline(bool online)
    {
        this->online = online;
    };

    void stopRunner()
    {
        std::cout << "stop the runner for device " << this->getId() << endl;
        pthread_join(this->runner, NULL);
    }

    void startRunner()
    {
        std::string device_id = this->getId();
        char *id[device_id.length() + 1];

        strcpy(*id, device_id.c_str());

        std::cout << "start the runner for device " << this->getId() << endl;
        pthread_create(&this->runner, NULL, generateData, (void *)id);
    }

    Device(std::string id, bool online)
    {
        this->online = online;
        this->id = id;
    }
};

void *generateData(void *device_id)
{

    while (true)
    {

        int result = 1 + (rand() % 100);
        std::cout << "value " << result << "emitted by the device " << device_id << endl;
        sleep(2);
    }

    return nullptr;
}