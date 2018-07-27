# JSH
 
## Features/Notes
When a user clicks on an option in the header, the proper content should display. The URL should also reflect the change.
When a user clicks on an option in the header, the user should know which item has been selected (highlighted and spaced out).
Implementation of a drop down menu as an example to further group the sub-items together (see “shop > juice”). When each sub-item is hovered over, selected, the user should receive feedback to know which item is being hovered on. Once an item is selected, the URL should reflect the change.
Display data dynamically (see “shop > juice”).
Implementation of carousel with React (see “home”) 
When a user hovers over the carousel, it should display an additional overlay on top with its unique data.  
Use of MaterialUI’s for the location component.
Utilized react-boostrap for its layout.
Customized css file to refine styling.
 
## Backlog
Scale images displayed on “shop” > “juice” page so that the images won’t exceed the div width when the browser window is resized.
Alternatively, abandon frameworks such as react-bootstrap. Use CSS grid/flexbox/media queries for more customization.
Build the location component from scratch.
Originally, I created a previous and next arrow to overlay on the carousel. My vision was that the arrows would allow users to change the image. I changed my mind halfway through the design, and went with circle paginations on the bottom middle of the image instead. I ran out of time to completely rewrite the component. Due to this, the circles are “hardcoded”. This wouldn’t be ideal if we want to add more images in the future. The number of circles should be generated to match with the number of images we have.
Related to the note above, the circle should darken or change color when the corresponding image is selected/displayed.

## Technology/Tools
Sublime
React
react-router-dom
react-bootstrap
Webpack
Webfontloader
MaterialUI

### To run on local machine
```
> yarn install
> yarn start
```



