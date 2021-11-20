#include <bits/stdc++.h>
#include <pthread.h>
#include "device.cpp"
#include "simulator.h"
#include "runner.h"

using namespace std;


Simulator::getDevices()
{
    return this->devices;
}

Simulator::setDevice(map<string,Device> devices)
    {
        this->devices = devices;
    }

Simulator::addDevice(string id, Device device)
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

Simulator::getDevice(string id) {
        auto itr = this->devices.find(id);
        if (itr != this->devices.end())
        {
            return itr->second;
        }
}

