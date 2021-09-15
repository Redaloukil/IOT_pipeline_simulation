#include <bits/stdc++.h>
#include "device.h"

using namespace std;

class Simulator
{

private:
    map<string, Device> devices;

public:
    map<string, Device> getDevice()
    {
        return this->devices;
    }

    void setDevice()
    {
        this->devices;
    }

    Simulator()
    {
        this->devices = {};
    }
};
