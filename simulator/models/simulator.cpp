#include <bits/stdc++.h>
#include <pthread.h>
#include "simulator.h"
#include <unistd.h>
#include <typeinfo>

using namespace std;
    map<string,Device> Simulator::getDevices()
    {
        return this->devices;
    }

    void Simulator::setDevice(map<string,Device> devices)
    {
        this->devices = devices;
    }

    void Simulator::addDevice(string id, Device* device)
    {
        if (devices.find(id) == devices.end()) {
            cout << "Insert device with id" << id << std::endl;
            cout << "Insert device with id" << device->getId() << " " << device->getOnline() << std::endl;
            try {
                devices.insert(make_pair(id, *device));
            } catch(...) {
                throw;
            }
            
        } else {
            std::cout << "device already exists in device" << endl;
        }
    }

    void Simulator::removeDevice(string id){
        cout << "remove device" << std::endl;
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
        for(;;) {
            cout << "Number of devices" << this->devices.size() << endl;
            sleep(2);
        }

    }

    Simulator::Simulator() {
        delete &devices;
    }