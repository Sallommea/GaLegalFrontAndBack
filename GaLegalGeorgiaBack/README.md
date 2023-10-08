# README - GaLegalGeorgia Backend

This is the backend component of the law company GaLegalGeorgia Webpage project, built with .NET 7 using Clean Architecture. It serves as the server-side logic for the law company's web application.

# Table of Contents 
1. [Getting Started](#getting-started)
2.  [How do I get set up?](#how-do-i-get-set-up) 
3.  [Installation](#installation) 
4. [Configuration](#configuration) 
5. [Database Setup](#database-setup) 
6. [CORS Configuration](#cors-configuration)
 8. [Setting API as Startup Project](#setting-api-as-startup-project) 


# Getting Started

 To get started with this project, follow the instructions below.


# How do I get set up?

Summery of set up:
- IDE: Visual Studio 2022
- Technologies/Framework: Microsoft .NET 7.0
- SDK: 7.0.102



# Installation

Clone this repository to your local machine:
 ```bash 
 git clone https://github.com/Sallommea/GaLegalFrontAndBack.git
```
1.  Open the project in IDE.    
2.  Restore dependencies and build the project:
 ```bash 
dotnet restore
dotnet build
```
# Configuration

In the project, you'll need to configure some settings. In a `appsettings.json` file add the following:
 ```bash 
{
  "ConnectionStrings": {
    "GaLegalDatabaseConnectionString": "Server=(localdb)\\mssqllocaldb;Database=db_galegal_management;Trusted_Connection=true;MultipleActiveResultSets=true;"
  },
}
```
Replace the connection string values with your SQL Server details.


# Database Setup

Ensure you have created the SQL Server database specified in your connection string (`db_galegal_management` in the example above). You can use Entity Framework Migrations to create the database schema. 


# CORS Configuration


By default, the project allows requests from `http://localhost:4200` and http://localhost:4201, which is often the URL for a front-end development server. If you need to change the CORS policy, update the configuration in the `Program.cs` file:
 ```bash 
 builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:4200", "http://localhost:4201") 
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});
 ```
 Modify the `builder.WithOrigins` line to specify the origins you want to allow.

# Setting API as Startup Project

Ensure that your API project (`GaLegalGeorgia.Api`) is set as the startup project in your IDE.


