# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/ozanweb/interactive-rating-component-main]
- Live Site URL: [https://ozanweb.github.io/interactive-rating-component-main/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Google fonts (https://fonts.googleapis.com/css2?family=Overpass&display=swap)
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

- Have all the text inside ```html``` ready.
- Start writing HTML semantics from top to bottom
- Write your CSS for the outmost element first (from parent to child)
- ```button``` element can be used to submit forms. To do this you should use ```form``` attribute inside ```button``` and write the ```form```'s ```id``` into it.
- We can create CSS files externally for styling our site.
- Using javaScript adds interactivity to the site which turns it into a dynamic site
- Built-in ```querySelectorAll()``` function creates collection of Nodes which cannot be used directly with other built-in functions. To make each of these Nodes useable, I had used ```for of``` loop.
- the ```target``` keyword indicates the parameter itself which triggers the function. In our case:
```js
radio.onclick = (e) => {
    console.log(e.target.value)
}
```
- - parameter ```e``` is the ```radio``` itself. 
- - when a ```radio``` button is clicked the keyword ```target``` targets the value of ```e``` which is ```radio```.
- - as a result we see the value of the element we clicked on in the console.

### Continued development

- I still need a lot of practice on DOM using JS
- I don't know much about forms, and how they work. Do I have to know some backend coding to build fully functional form? When you click submit button on my site the "thank you" message appears just for a second. I am not sure if it is how it should be.

### Useful resources

- [https://htmlcolors.com/hex-to-hsl] - This helps you to make conversions between different color codes.
- [https://tinyurl.com/yrp2vmhv] - This explains how you can use a radio button and add ```eventLisnere``` to it.

## Author

- Frontend Mentor - [@ozanweb](https://www.frontendmentor.io/profile/ozanweb)
- LinkedIn - [@ozanpalanci](https://www.linkedin.com/in/ozanpalanci/)


## Acknowledgments

John Au-Yeung - [https://thewebdev.info]

