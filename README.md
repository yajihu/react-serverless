## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3006](http://localhost:3000) to view it in the browser.

Project Name: react-serverless

Frameworks: Serverless: https://www.serverless.com/, React: https://reactjs.org

Implementation:

Backend:
1. Use serverless framework to deploy condition.json on aws.
2. The Api endpoint is ready on https://4k4guuibdl.execute-api.us-east-1.amazonaws.com/dev/api/condition

Frontend:
1. Use React framework to get data from api.
2. Use React Card for the layout of items.
3. Handle the errors, if image is missing, replace it with a question mark image(https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg),
if the description is missing, replace it with content "Contents were not found on the database, please try later."
4. Modular and responsive design exactly like the demo, four items per row in desktop view, one item per row in mobile view.
5. Find out more feature, which allow user to click for more content on display, and find out less for less content display.

Installation:

Git clone to local, in Terminal or Visual Studio Code, use following command:
npm install
npm start

Demo: https://www.youtube.com/watch?v=1sAbVnrWAOU&feature=youtu.be
