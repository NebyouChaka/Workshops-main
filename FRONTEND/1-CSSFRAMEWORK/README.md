# CSS Framework - React-Bootstrap

## What are we learning today?
- 1.Create a react project
    -create-react-app
    -cleaned up
    -** incorporate a CSS Framework - react-bootstrap
    -CDN -> index.html
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
- 2.What is a CSS Framework?
    ** A collection of pre-built stylesheets

    -React-bootstrap:

    - They can have components [import]
        -Button, navbars, cards [A lot of these components have pre-fixed styling so all the heavy lifting is done for you, you dont have to write the styles from scratch]

        import nameOfComponent from 'react-bootstrap/nameOfComponent'

    - classname based CSS framework: [no need to import into component]
     - you can add a specific class, the class has pre-written css.


    - Why use a CSS Framework?
    - Makes styling a lot more efficient
    - 

- 3. Demo - React-bootstrap Grid 
 * Grid - divides your screen into 12 parts

 -Use Container - Row - Col 
    -To demonstrate the behavior of the 12 unit grid system.

    -Container- react bootstrap component that provides a means to center and horizontally pad your content. Use a container for a responsive width.


    Grid - The grid system is divided into 12 and depending on a specified width (determined by sm / md / lg / xl), the responsiveness of the grid system will adjust accordingly.

    Take aways:
        - 12 unit system
        - the size properties determin the breakpoints [responsiveness]
        - the values given within the size property determines n/12 

- 4. Demo - React-bootstrap components

- Make sure we import them into our react component.

