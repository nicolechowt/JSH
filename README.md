# JSH
 
## Features/Notes
1. When a user clicks on an option in the header, the proper content should display. The URL should also reflect the change.

2. When a user clicks on an option in the header, the user should know which item has been selected (highlighted and spaced out).

3. Implementation of a drop down menu as an example to further group the sub-items together (see “shop > juice”). When each sub-item is hovered over, selected, the user should receive feedback to know which item is being hovered on. Once an item is selected, the URL should reflect the change.

4. Display data dynamically (see “shop > juice”).

5. Implementation of carousel with React (see “home”). 

6. When a user hovers over the carousel, it should display an additional overlay on top with its unique data.  
7. Use of MaterialUI’s for the location component.

8. Utilized react-boostrap for its layout.

9. Customized css file to refine styling.
 
## Backlog
1. Scale images displayed on “shop” > “juice” page so that the images won’t exceed the div width when the browser window is resized.

2. Alternatively, abandon frameworks such as react-bootstrap. Use CSS grid/flexbox/media queries for more customization.

3. Build the location component from scratch.

4. Originally, I created a previous and next arrow to overlay on the carousel. My vision was that the arrows would allow users to change the image. I changed my mind halfway through the design, and went with circle paginations on the bottom middle of the image instead. I ran out of time to completely rewrite the component. Due to this, the circles are “hardcoded”. This wouldn’t be ideal if we want to add more images in the future. The number of circles should be generated to match with the number of images we have.

5. Related to the note above, the circle should darken or change color when the corresponding image is selected/displayed.

## Technology/Tools
1. Sublime
2. React
3. react-router-dom
4. react-bootstrap
5. Webpack
6. Webfontloader
7. MaterialUI

### To run on local machine
```
> yarn install
> yarn start
```



