FROM node:14

WORKDIR /usr/src/app/simulator

COPY package*.json ./

RUN npm install -g @angular/cli && npm install  

CMD ["ng", "serve", "--port", "4200", "--host","0.0.0.0"]

EXPOSE 4200