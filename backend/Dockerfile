FROM openjdk:10
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
#mvn jar_file location
#ARG JAR_FILE=target/*.jar
ARG JAR_FILE=.mvn/wrapper/*.jar
COPY ${JAR_FILE} ./app.jar
EXPOSE 8090
CMD ["java","-jar","app.jar"]