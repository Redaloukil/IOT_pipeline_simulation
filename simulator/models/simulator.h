#include <bits/stdc++.h>
#include <thread>
#include <unistd.h>

#include "device.h"

using namespace std;

class Simulator {
    private:
        map<string,Device> devices;
    public:
        Simulator();
        ~Simulator();

        map<string,Device> getDevices();

        void setDevice(map<string,Device> devices);

        void addDevice(string id, Device device);
        void removeDevice(string id);

        void runSimulator();

        Device getDevice(string id);
};