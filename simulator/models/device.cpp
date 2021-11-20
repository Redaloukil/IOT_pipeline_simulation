#include <bits/stdc++.h>
#include "device.h"

    
string Device::getId()
    {
        return this->id;
    };

const void Device::setId(std::string id)
    {
        this->id = id;
    }

const void Device::setOnline(bool status){
        this->online = status;
    }

bool Device::getOnline(){
        this->online;
    }

Device::Device(std::string id, bool online)
    {
        this->online = online;
        this->id = id;
}
