#include <bits/stdc++.h>
#include "event.h"
using namespace std;

class Event
{
private:
    string reference;
    int value;

public:
    void setValue(int value);
    int getValue();
    void setReference();
    string getReference();
    Event(/* args */);
    ~Event();
};


