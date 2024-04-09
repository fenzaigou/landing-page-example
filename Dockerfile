FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM httpd

COPY --from=BUILD_IMAGE ./app/dist /usr/local/apache2/htdocs

EXPOSE 80
