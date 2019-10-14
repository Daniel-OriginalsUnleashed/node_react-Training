# node_react-Training
 
 Node is not a language it is a JS interpreter for desktop and server use. Which has the ability to work with Web or Desktop applcications.

Should be used for Data intensive workloads not CPU intensive workloads.
To serve up data quickly to a service or user. Not for example to do image manipulation or processing.

Once installed, a project can be created with npm init, initalising package.json which will manage the required packages to run the app.

Packages such as:
express - a http utility with middleware e.g. 
const app = express();
body-parser - auto json decoding for body content of requests

```const bodyParser = require('body-parser');```

// Set some middleware to parse JSON passed in via req.body

```app.use(bodyParser.json())```

dotenv -  envrioment configuration, allows access to variables that are not pushed to source control
mongoose - mongoDB client
cors - Cross Origin Resource Sharing

``var corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
app.use(cors(corsOptions))``

Microservices
From <https://www.twilio.com/blog/building-javascript-microservices-node-js> 

Start the services with:

node ./node_microservices/heroes/heroes.js 8081

node ./node_microservices/threats/threats.js 8082


![alt text](https://i.imgur.com/Ab0Llss.png, "Microservices, Heroes and Threats, with internal methods.")
https://www.draw.io/

 
React
Create the Main Project directory
In your terminal, navigate to a directory where you would like to save your project. Now create a new directory for your project and navigate into it:
mkdir my_awesome_project
cd my_awesome_project
Create a React App
This process is really straightforward.
I will be using Facebook’s create-react-app to… you guessed it, easily create a react app named client:
npx create-react-app client
cd client
npm start

From <https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/> 

Creating the Client with React templating
Use CORS in API to ensure that client can access API

Using Bootstrap with Client install:
npm install --save node-sass
From <https://create-react-app.dev/docs/adding-bootstrap#using-a-custom-theme> 
To enable sass and scss files.
