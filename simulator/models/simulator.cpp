#include <bits/stdc++.h>
#include <vector>
#include <algorithm>
#include <pthread.h>
#include "device.h"
#include "runner.h"

using namespace std;

class Simulator
{
private:
    vector<Device> devices;

public:
    vector<Device> getDevices()
    {
        return this->devices;
    }

    void setDevice(Device device)
    {
        this->devices.push_back(device);
        device.startRunner();
    }

    // void addDevice(Device device)
    // {
    //     if (find(this->devices.begin(), this->devices.end(), device) != this->devices.end())
    //     {
    //         std::cout << "device already exists in device" << endl;

    //         this->devices.erase(find(this->devices.begin(), this->devices.end(), device));
    //         device.stopRunner();
    //     }
    //     else
    //     {
    //         std::cout << "device already exists in device" << endl;

    //         this->devices.push_back(device);
    //         device.startRunner();
    //     }
    // }

    // Device getDevice(Device device)
    // {
    //     if (find(this->devices.begin(), this->devices.end(), device) != this->devices.end())
    //     {
    //         return this->devices.data(find(this->devices.begin(), this->devices.end(), device));
    //     }
    // }

    void setDevices(vector<Device> devices)
    {
        this->devices = devices;
    }

    Simulator()
    {
        this->devices = {};
    }
};
