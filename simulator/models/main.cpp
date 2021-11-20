#include <bits/stdc++.h>
#include "simulator.cpp"


int main() {
    string name1 = "reda052364";
    string name2 = "reda448512";
    string name3 = "reda478768";

    bool running = false;
    
    Device* device = new Device(name1, false);
    Device* device2 = new Device(name2, false);
    Device* device3 = new Device(name3, false);

    Simulator* simulator = new Simulator();

    simulator->addDevice(name1,*device);
    simulator->addDevice(name2,*device2);
    simulator->addDevice(name3,*device3);
    

    cout << simulator->getDevice(name1).getId() << endl;

    simulator->addDevice(name1,*device);

    return 0;
}