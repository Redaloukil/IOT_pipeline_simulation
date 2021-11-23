#include <bits/stdc++.h>
#include <thread>
#include <unistd.h>
#include "simulator.h"
#include "device.h"
#include "utils.h"


using namespace std;



int main(int argc, char *argv[]) { 
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
    cout << simulator->getDevice(name2).getId() << endl;
    cout << simulator->getDevice(name3).getId() << endl;

    std::thread t1(generateData, device);     
    std::thread t2(generateData, device2);
    std::thread t3(generateData, device3);


    t1.join();
    t2.join();
    t3.join();
    return 0;
}