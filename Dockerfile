From node:alpine3.10 as build

RUN mkdir -p /app/corona-code
WORKDIR /app/corona-code
COPY . /app/corona-code

RUN npm install
RUN npm run build

FROM nginx:latest
RUN mkdir -p /app/build
WORKDIR /app/build
COPY --from=build /app/corona-code/build/ /usr/share/nginx/html
EXPOSE 80