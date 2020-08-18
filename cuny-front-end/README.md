This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# Amplify-Console-Demo

FRONT END: 
Cuny-front-end folder:

In order to deploy to aws s3, run npm run build to create a build a folder for it to be able to be uploaded to a s3 bucket.

Index.html in public folder, renders out App.js in script src

    SRC Folder:
        Actions folder:
            index.js :
                Line 1 importing the constant variables for user login and match profile
                Line 3 takes in user_login and performs action based on the type with the data in payload
                Line 11 for API calling for db endpoint, to get info
                Line 7 performs action based on the type and with the data in payload

            Constants folder:
                Constants needed for the types for redux
        *** Js folder:
            Index.js imports store and the 2 reducers
            Assigns store and the reducers to window
        Reducers folder:
            Imported constant variables
            initialState of the store to have 3 empty variables
            Reducer function checks action and returns the state with what the variable is set to be
        Store folder:
            Index.js file : this just creates the store for redux, thunk is middleware, adds extra functionality, takes care of async calls. (or can use redux saga)

    Files in SRC folder:
        App.css : 
            styling for the app

        App.js : 
            setting isActive variable to the variable in the store
            Creates a navbar and routes needed for it using react-router-dom, allows profile link to appear in navbar when a submit button is clicked.
            If statement checks if variable is true, shows profile button if it is, does nothing if false
            End of file: creates an instance of mapstoretoprops and connects it to app class and exports it.

        Home.js: 
            the home page/landing page
       
        Index.js: renders store, app with router in the root of index.html
            Provider wraps your app so that the store exists in your app

        Login.js: mapDispatchToProps updates the store with reducers 
            mapStoreToProps, we take the isActive variable in store to use locally
            This.submitForm, submits data and go to next page
            HandleChange, sets the state variables
        Profile.js:
             it is from bootstrap
        Signup.js: 
            state of email, password, first&last name, gets saved and posted to db and goes to profile page

	


BACK END: Made with Node and Express, using serverless
.serverless and .node_modules is created for us through SLS Deploy

.env file:
    stores constant for a table name called User, which will be used in serverless.yml

index.js:
    creating constant variables to use different dependencies.
    Line 7 Var Cors helps solve Cors Policy error 
    creating a variable , USER_TABLE which makes sure that the database knows what table to put the data in. 
    Line 11: creating an instance of DynamoDB client, because we're going to use the table with AWS, not locally
    app.get gets the endpoint for the index page.
    Line 31: GET function to get users by email
    DynamoDb.get: gets from the databse by email, and if there's an error a message will be outputted, but if it exists they are placed into variables and returned into formats.
    Line 54: App.post takes input from signup and posts it to the endpoint '/users'
    followed by if statements that check if constants are strings.
    Line 72: const params puts certain items into a table and declares the table name
    Line 82: dynamodb.put is when data is placed into databsse. if theres an error, the console will display an error message. If successful, the constants will be returned.

Serverless.yml: make sure spacing is accurate
    Line 55: Functions:
        APP: Get index endpoint and acts as a test function
        GetUser: gets user by email 
        CreateuSER: Posting to user endpoint to create the user in the database table

    Line 79: Resources reads and writes to database tables
    Plugins: allows you to use serverless offline.

