#MVN
FROM maven:3.6.3-jdk-8 as maven
WORKDIR /app
COPY ./pom.xml ./pom.xml
RUN mvn dependency:go-offline -B
COPY ./src ./src

RUN mvn package && cp target/*.jar app.jar

#JDK
FROM openjdk:10
WORKDIR /app
COPY --from=maven /app/app.jar ./app.jar
EXPOSE 8090
CMD ["java","-jar","/app/app.jar"]


# ENV APP_HOME=/usr/app/
# WORKDIR $APP_HOME
#ARG JAR_FILE=target/*.jar requires mvn clean package at least
# ARG JAR_FILE=target/*.jar
# COPY ${JAR_FILE} ./app.jar

# EXPOSE 8090
# CMD ["java","-jar","app.jar"]