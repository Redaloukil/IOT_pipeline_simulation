#include <bits/stdc++.h>
using namespace std;

#pragma once

class Device
    {
        private:
            std::string id;
            bool online;
        public:
            const void setId(std::string id);
            std::string getId();
            
            const void setOnline(bool status);
            bool getOnline();

            Device(std::string id, bool online);
    };
