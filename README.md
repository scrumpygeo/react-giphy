## Homer Thinking

In this basic react app you type in a query in the search bar and it searches for giphy images that resemple your search.
It retrieves a list which it places on the right and when you click on one it displays the giphy in larger format.

The app reacts to keystrokes and retrieves a list according to what's been typed.

Grab data from api and put it in state. Do this from App.js.

Go to npm site and see if there is a package for giphy. Install it via npm install giphy-api --save

Updating main imgage. Go to Gif.js, add onClick function to image, handle the click and change the state. Since state is in App, you need to pass it a function to Gif.js
