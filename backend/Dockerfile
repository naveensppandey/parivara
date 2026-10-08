# Stage 1: Build Java 21 Spring Boot Application with Maven
FROM maven:3.9.6-eclipse-temurin-21-alpine AS build
WORKDIR /app

# Copy pom.xml and source code
COPY pom.xml ./pom.xml
COPY src ./src

# Package production executable JAR
RUN mvn clean package -DskipTests

# Stage 2: Production Runtime Environment with Java 21 JRE
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copy built artifact from Stage 1
COPY --from=build /app/target/parivara-backend-1.0.0.jar app.jar

# Expose server port
EXPOSE 8080
ENV PORT=8080
ENV SPRING_PROFILES_ACTIVE=prod

# Run Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
