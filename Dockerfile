FROM --platform=linux/amd64 node:lts-alpine3.17 AS prod
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM --platform=linux/amd64 nginx:stable-alpine3.17-slim
WORKDIR /usr/share/nginx/html
COPY --from=prod /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
