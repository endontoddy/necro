FROM centos

RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash -
RUN yum install nodejs -y

RUN npm i -g local-web-server

VOLUME /src
WORKDIR /src

EXPOSE 8080
