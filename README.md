## Homer Thinking

In this basic react app you type in a query in the search bar and it searches for giphy images that resemple your search.
It retrieves a list which it places on the right and when you click on one it displays the giphy in larger format.

The app reacts to keystrokes and retrieves a list according to what's been typed.

Grab data from api and put it in state. Do this from App.js.

Go to npm site and see if there is a package for giphy. Install it via npm install giphy-api --save

**====**

Updating main imgage. Go to Gif.js, add onClick function to image, handle the click and change the state. Since state is in App, you need to pass it a function to Gif.js

===

**Event No. 1**

When a user types a query the list of gfs should update.

The first parent component aware of both the query and the list of gifs should carry this piece of state.

Here, the App should carry the gifs piece of state.

**Event No. 2**

When user clicks on a gif from the list, it should feature on the main scene, front and centre.

The first parent component aware of both the list of gifs and the selected one should carry this piece of state.

Here, App should carry the selectedGif piece of state.

**---**

```
App's state:

{
    gifs: [],
    selectedGifId: null
}
```

**Strategy**

We handle events at the local component level

eg in the Gif component we have this:
onClick={this.props.handleClick}

Then in App, we have:
this.setState({ selectedGifId: ...})

= update the state at first possible parent component level, triggering its render()

...flowing new props down to its children components who re-render it as well.
