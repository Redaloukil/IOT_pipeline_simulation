### Data gathering simulation platform

Data gathering infrastructures ( iot ) tend to have the same architecture, a pipeline of multiple steps starting from the sensor devices which captures and emits the data to the information that the user get in a dashboard or a visual representation.

### Services

#####  Command interface
A user interface which changes the state of the virtual iot sensor. After Singing up and logging in, you can create a sensor ( virtually ) and start it.
By starting the device, the Web server will send a message to queue to notify the simulator that the device is started.

##### Message queue
Receives message in two different queues from both command interface and simulator.

##### Web Server
Holds the state of the entire virtual device framework, the server role is to :
- Store the state of the sensors ( started/stopped).
- Send user's commands to the message queue.

##### Simulator
Listens to the message queue, receives commands from the web server and simulates sensors sending random numerical data the message queue back.
  
  