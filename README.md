# Password Generator

The app generates a random password depending on user's preferences.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Choose how long the password should be and whether it should include symbols
- Click on the button to see two generated passwords
- Click on a 'copy' icon to copy the password to their clipboard
- See hover effects on varied elements
- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./styles/preview.jpg)


### Links

- Code: [Github](https://github.com/Arniss5/Password-Generator)
- Live Site URL: [Github Pages](https://arniss5.github.io/Password-Generator/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- JavaScript
- Fontawesome
- [Figma](https://www.figma.com/file/NEj9JDycMjF3XKXq7swoc9/Random-Password-Generator-(New-version)?node-id=0%3A1) - For styles


### What I learned

With this app I practiced JS functions with the use of conditionals and iteration. I learned how to enable user to copy to clipboard with a single click. I got more experience manipulating the DOM, creating event listeners and rendering text depending on user input. I used Math methods.



```js
 for (let i = 0; i < passLength; i++) {
        //check if symbols is checked
        if (includeSymbols) {
            //get random character including symbols
            randomIndex = Math.floor(Math.random() * characters.length)
            //get random character excluding symbols
        } else {
            randomIndex = Math.floor(Math.random() * 62) 
        }
}
```

```
if (e.target.id === "copy-one") {
        copyText = outputOne.textContent
    } else if (e.target.id === "copy-two") {
        copyText = outputTwo.textContent
    }
```
```js
navigator.clipboard.writeText(copyText)
```



### Continued development

I am planning to continue focusing on writing JavaScript functions and start designing more complex applications.

## Author

- Github - [Arniss5](https://github.com/Arniss5)

