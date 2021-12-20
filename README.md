# react-exam

We do love __beer__ and we want to make an app to order some :beer: !

To do so we will use the following [API](https://punkapi.com/documentation/v2)

## Rules

- You make use of __React__ or __ReactNative__. State management technology is up to you: Redux, xState (Extra point if you dare to dive into this one), Context ... =  (React/Redux)
- For styling you can choose what you want 🎨 = React bootstrap
- There are 3 pages (__beer list__, __beer detail__, __beer cart__) = (home, cart)

Beer list page:
- Display __all the beers paginated__ with an image, name, volume = OK
- It's possible to __order__ or __remove__ a beer from the cart = OK
- We can see if a beer has been __ordered or not__ = OK
- We can navigate to the __beer detail__ and __beer cart__ pages = OK

Beer details page:
- The beer details include the following: image, name, description, volume, ingredients, brewers_tips, and more if you feel the need ;) = OK
- We can see if the beer has been __ordered or not__ = OK
- We can navigate to the __beer list__ and __beer cart__ pages = OK

Beer cart page:
- Display a simple list of beers contained in the cart with their image and name = OK
- We can navigate to the __beer detail__ and __beer list__ pages = OK

## Bonus feature

- Use a navigation dependency = OK
- When the page is reloaded, the cart remains filled = OK
- It's possible to __search__ for a beer = OK
- Responsive design (animations) = OK
- Implement __tests__ (you can choose your stack: Storybook, Jest, Cypress, QAWolf, ...) = not yet
- Add __linters__ = OK