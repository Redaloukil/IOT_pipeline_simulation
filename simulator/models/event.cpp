#include <bits/stdc++.h>
#include "event.h"

using namespace std;
    void Event::setValue(int value) {
        this->value = value;
    };

    int Event::getValue() {
        return this->value;
    };
        
    void Event::setReference(string reference) {
        this->reference = reference;
    };

    string Event::getReference() {
        return this->reference;
    };

    Event::Event(int value,string reference) {
        this->value = value;
        this->reference = reference;
    };

    Event::~Event(){
        //
    }


