#include<pthread.h>
#include"device.cpp";

class Runner {
    Device* device;
    pthread_t runner_thread;
    
    public:
    void startRunner()
    {
        std::string device_id = device->getId();
        std::cout << "Start the runner for device " << device->getId() << " " << endl;

        pthread_create(&this->runner_thread, NULL, generateData, (void *)id);
    }
}