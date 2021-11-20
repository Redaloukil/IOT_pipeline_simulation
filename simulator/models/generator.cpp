#include <bits/stdc++.h>

using namespace std;

class Generator {
    private:
        string id;
    public:
        string getId(){
            return this->id;
        }
        void setId(){
            this->id = id;
        }

        Generator::Generator(string id)
        {
            this->id = id;
        }

        Generator::~Generator()
        {
            //
        }
}