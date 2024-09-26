# FROM node:18

# RUN which yarn || npm install -g yarn

# WORKDIR /app

# COPY package*.json ./

# RUN yarn

# # Copy SSL certificates to the container
# COPY app.ura.noc.redestlf.br.cer /usr/local/share/ca-certificates/

# # Update SSL certificates in the container
# RUN update-ca-certificates

# COPY . .

# RUN yarn build

# EXPOSE 3000

# CMD ["yarn", "start"]

FROM node:latest as node
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
# Stage 2
FROM nginx:alpine

RUN mkdir -p /opt/ura-cert

COPY app.ura.noc.redestlf.br.cer /opt/ura-cert
COPY app.ura.noc.redestlf.br.pem /opt/ura-cert

COPY --from=node /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf