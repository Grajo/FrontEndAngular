FROM openjdk:10
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
#ARG JAR_FILE=target/*.jar requires mvn clean package at least
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} ./app.jar
EXPOSE 8090
CMD ["java","-jar","app.jar"]