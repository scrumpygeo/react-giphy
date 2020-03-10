# Giphy Search

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

# Recurring Themes in React.

**Controlled Components**

- where input or select value is bound to the internal state of the component.

- ie, user types in an input, the change triggers setState() then the change redefines the input.

- eg in SearchBar.js, where we define 'term' as part of state; we set the term to be equal to the input's value - eg value={this.state.term} - then use the method called by the input tag's onChange to run setState and change the state. So the component has access to state.term.

A Controlled component is useful where you have an input or a form and you need the state to hold the value of the input. Otherwise you may end up typing input and nothing changes.

**List Patterns**

= where you have a component to which u pass an array as props and inside this component, in the render method, you map through the array to render a list of elements.

- you map over an array of props and pass the props to the children. React needs a unique key for ecah child.

eg:

```
    const GifList = (props) => {
        return (
            <div>
                {props.gifs.map((gif) => {
                    return <Gif key={gif.id} id={gif.id} />;
                })}
            </div>
        );
    };
```

**Destructuring**

= Explode props to reveal explicitly the keys:

-> Turn this: const GifList = (props) => {}

into this: const GifList ({gifs, getSelectedGif}) => {}

So now you can refer to props.gifs.id as gifs.id etc.

- Destructure gif further in map:
  Turn this: gifs.map(gif => ())

  into this: gifs.map(({ id }) => (

        and then refer to id instead of gif.id
