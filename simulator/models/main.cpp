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
    string name4 = "redadkghdsh";

    bool running = false;

    Simulator* simulator = new Simulator();

    Device* device = new Device(name1, false);
    Device* device2 = new Device(name2, false);
    Device* device3 = new Device(name3, false);
    Device* device4 = new Device(name4,false);
    


    simulator->addDevice(name1,device);
    simulator->addDevice(name2,device2);
    simulator->addDevice(name3,device3);
    simulator->addDevice(name4,device4);
    
    
    return 0;
}