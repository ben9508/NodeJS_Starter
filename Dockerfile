FROM node:lts

WORKDIR D:/node-test

ENV TZ Asia/Muscat
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm","start" ]
