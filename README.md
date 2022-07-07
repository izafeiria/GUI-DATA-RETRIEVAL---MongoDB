# GUI Installation Models 

This GUI is a full stack development project with Spring-Boot and React.js. It enables data retrieval from a Mongo DB database.

## Requirments
- A Java IDEA
- Java 11 version
- Apache Maven 3.6.3 version or higher
- Node.js 16.14.2 version or higher

## Installation
#### Node.js installation
Refresh your local package index first by typing:
```bash
sudo apt update
```
Then install Node.js:
```bash
sudo apt install nodejs
```
Check that the install was successful by querying node for its version number:
```bash
node -v
```
In most cases, you’ll also want to also install npm, the Node.js package manager. You can do this by installing the npm package with apt:
```bash
sudo apt install npm
```
#### Download project
- Download the repository locally in your [desired] folder.
- Open folder as a project preferable with IntelliJ IDEA 
#### Define Database 
- Go to the file application.properties in the following directory src/main/resources/application.properties
- Define the spring.data.mongodb.uri with the mongodb+srv you want.
- Give the name of database and collection.

By default I have random name for credentials purposes, this GUI created for specific data and queties based on the form of that data.
Collection should always be of type 'installationModels' as this GUI manipulate this kind of document data.
The scope of this repository is to provide a way of construction with MongoDB, Spring Boot and React.js. It doesn't provide access to existing databases.
#### Run SpringBoot Application
Go to the following directory src/main/java/com/example/demo directory and run the ModelApplication file.
#### Start Front-end 
Open a new terminal from your IDEA or just your cmd and go to the path src/main/front-end and type the following commands :
```bash
npm run build
```
If you have the following error : 'react-scripts' is not recognized as internal or external command,operable program or batch file. Run: 
```bash
npm install react-scripts --save
```
Finally run : 
```bash
npm start
```
GUI will run in the http://localhost:3000/  in your default browser. For a better employment open this url in Firefox.
## HAVE FUN !
