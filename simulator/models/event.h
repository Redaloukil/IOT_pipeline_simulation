#include <bits/stdc++.h>

using namespace std;

class Event
{
private:
    string reference;
    int value;

public:
    void setValue(int value);
    int getValue();
    void setReference(string reference);
    string getReference();
    Event(int value,string reference);
    ~Event();
};


