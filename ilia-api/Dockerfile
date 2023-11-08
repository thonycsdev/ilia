# Stage 1: Build the application
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["API/ilia-api.csproj", "API/"]
RUN dotnet restore "API/ilia-api.csproj"
COPY . .
WORKDIR "/src/API"
RUN dotnet build "ilia-api.csproj" -c Release -o /app/build

# Publish the application
FROM build AS publish
RUN dotnet publish "ilia-api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Stage 2: Create the final image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
COPY . .
EXPOSE 7289

ENV ASPNETCORE_URLS=https://+:7289

# Creates a non-root user with an explicit UID and adds permission to access the /app folder
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

# Copy the published application to the final image
COPY --from=publish /app/publish .


# Set the entry point for the application
ENTRYPOINT ["dotnet", "ilia-api.dll"]
