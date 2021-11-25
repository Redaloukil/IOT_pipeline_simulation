#include <bits/stdc++.h>
#include <pthread.h>
#include "simulator.h"
#include <unistd.h>


using namespace std;


map<string,Device> Simulator::getDevices()
    {
        return this->devices;
    }

    void Simulator::setDevice(map<string,Device> devices)
    {
        this->devices = devices;
    }

    void Simulator::addDevice(string id, Device device)
    {
        auto itr = this->devices.find(id);
        if (itr == this->devices.end())
        {
            this->devices.insert({id, device});
        }
        else
        {
            std::cout << "device already exists in device" << endl;
        }
    }

    void Simulator::removeDevice(string id){
        try {
            this->devices.erase(id);
        } catch (...) {
            throw;
        }
        
    }

    Device Simulator::getDevice(string id) {
        auto itr = this->devices.find(id);
        if (itr != this->devices.end())
        {
            return itr->second;
        }
    }

    void Simulator::runSimulator(){
        bool run = true;

        cout << "Number of devices" << this->devices.size() << endl;
        for(;;) {

                cout << "Number of devices" << this->devices.size() << endl;
                
                sleep(2);
        }

    }

    Simulator::Simulator() {
        delete &devices;
    }