/**
 *  Dependencies
 */
#include <uv.h>
#include <amqpcpp.h>
#include <amqpcpp/libuv.h>

/**
 *  Custom handler
 */
class MyHandler : public AMQP::LibUvHandler
{
private:
    /**
     *  Method that is called when a connection error occurs
     *  @param  connection
     *  @param  message
     */
    virtual void onError(AMQP::TcpConnection *connection, const char *message) override
    {
        std::cout << "error: " << message << std::endl;
    }

    /**
     *  Method that is called when the TCP connection ends up in a connected state
     *  @param  connection  The TCP connection
     */
    virtual void onConnected(AMQP::TcpConnection *connection) override
    {
        std::cout << "connected" << std::endl;
    }

    /**
     *  Method called when the server sends 
     *  @param  connection  The TCP connection
     */
    virtual void onAttached(AMQP::TcpConnection *connection) override
    {
        std::cout << "On contsruct a connexion" << std::endl;
    }

    virtual void onReady(AMQP::TcpConnection *connection) override
    {
        std::cout << "TCP connection established" << std::endl;
    }

public:
    /**
     *  Constructor
     *  @param  uv_loop
     */
    MyHandler(uv_loop_t *loop) : AMQP::LibUvHandler(loop)
    {
        /* */
    }

    /**
     *  Destructor
     */
    virtual ~MyHandler() = default;
};
