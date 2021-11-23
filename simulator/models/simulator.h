#include <bits/stdc++.h>
#include <thread>
#include "device.h"

using namespace std;

class Simulator {
    private:
        map<string,Device> devices;
        std::thread runners[];
    public:
        Simulator();
        ~Simulator();

        map<string,Device> getDevices();

        void setDevice(map<string,Device> devices);

        void addDevice(string id, Device device);

        Device getDevice(string id);
};