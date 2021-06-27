#Codagram
A social website (Stack-Overflow/Instagram clone), allows developers to share their thoughts/pics/codes
An axios call been made to the backend api-https://github.com/karanOO89/codagram-backend.git (Express,node,PostgreSQL), to Insert, Update, Fetch the data (using HTTP RESTful Methods - POST,PUT,GET)

Features-
1) Editor with built-in markdown 
2) One can post tags, code and generic post in the same text area but editor is smart enough to differntiate between those and post accordingly in different sections of post box 
3) Code could be visualized directly in pythontutor by click of one button
4) Search feature is also incorporated which could search based on tags or post 
5) Fetching of the most liked comment and display it on the main page 
6) Chat app using firbase with google authenticator
7) Like a post and like/dislike a comment
8) Add pictures by drag/drop - react-dropzone library used
9) React-router,react-router-dom dependecies are also incorporated along with useHistory hook,to navigate among pages 
10) material-ui for basic designing
11) react-syntax-highlighter library is used to highlight the syntax with colors depending upon the language
12) Styled-components is incorporated for basic styling of markdown 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
