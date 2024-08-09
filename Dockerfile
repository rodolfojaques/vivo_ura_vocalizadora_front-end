FROM node:18

RUN which yarn || npm install -g yarn

WORKDIR /app

COPY package*.json ./

RUN yarn

# Copy SSL certificates to the container
COPY app.ura.noc.redestlf.br.cer /usr/local/share/ca-certificates/

# Update SSL certificates in the container
RUN update-ca-certificates

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]