#include <bits/stdc++.h>
/*
    class Device

    represents a simulator device, which is an entity that will generate random events.
/**/

class Device
{
private:
    std::string id;
    bool online;

public:
    std::string getId()
    {
        return this->id;
    };

    const void setId(std::string id)
    {
        this->id = id;
    }
    bool getOnline()
    {
        return this->online;
    };
    void setOnline(bool online)
    {
        this->online = online;
    };

    Device(std::string id, bool online)
    {
        this->online = online;
        this->id = id;
    }
};