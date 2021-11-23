#include <bits/stdc++.h>
#include <pthread.h>
#include "simulator.h"

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

Device Simulator::getDevice(string id) {
        auto itr = this->devices.find(id);
        if (itr != this->devices.end())
        {
            return itr->second;
        }
    }

Simulator::Simulator() {
    this->devices = {};
}