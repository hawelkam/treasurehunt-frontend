### Project installaton

In the project directory, you can run:

`yarn start`
or
`npm install` followed by `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This project requires a rest api to be present to work correctly. The backend project can be found [here](https://github.com/hawelkam/treasurehunt-backend). It runs by default on port 8080.

`yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### Game

App starts by asking the user for his name. After it is provided the call to the api is made to get a new game board. If user didn't finish his previous game - the last state will be shown.

Now the user can check up to 3 cells to be checked for treasure. All those cells are sent with one api call to the backend and in return the app gets information about what is the value of specific cells and updates their status on the Redux store. After all 3 treasures are found the user is redirected to the end screen, where he can see the leaderboard - current TOP 10 (where lesser number in the score column is the better one). Leaderboard is also gotten from the backend API. 


