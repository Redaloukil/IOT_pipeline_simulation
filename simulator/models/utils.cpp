#include <bits/stdc++.h>

#include <unistd.h>
#include "device.h"
#include "utils.h"

using namespace std;


void generateData(Device* device)
    {
        while (true)
        {
            int result = 1 + (rand() % 100);
            std::cout << "value " << result << " emitted by the device " <<  device->getId() << endl;
            sleep(2);
        }
    }




