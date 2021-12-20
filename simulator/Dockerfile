FROM ricejasonf/clang
WORKDIR /usr/local/src

RUN git clone https://github.com/CopernicaMarketingSoftware/AMQP-CPP.git \
  && cd AMQP-CPP && mkdir build && cd build \
  && cmake \
    -DCMAKE_INSTALL_PREFIX=/usr/local \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_CXX_FLAGS=" -stdlib=libc++" \
    -DCMAKE_EXE_LINKER_FLAGS=" -lc++abi" \
    .. \
  && make install

# jsoncpp
RUN git clone https://github.com/open-source-parsers/jsoncpp.git \
  && cd jsoncpp && mkdir build && cd build \
  && cmake \
    -DCMAKE_INSTALL_PREFIX=/usr/local \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_CXX_FLAGS=" -stdlib=libc++" \
    -DCMAKE_EXE_LINKER_FLAGS=" -lc++abi" \
    .. \
  && make install \
  && mkdir /usr/local/include/jsoncpp \
  && cp -r /usr/local/include/json /usr/local/include/jsoncpp/
