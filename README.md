# Installation Instructions
Clone the project locally and run 'npm install' and 'npm start'. 
<br />Webpack dev server runs at http://localhost:8080/

# Lab: Props and State
This lab demonstrates how a stateful 'Picker' React component maintains the application data and how this data is passed to functional 'Color' child components as props. This state data, a string representing the color selected by the user (instantiated as 'red' by default) is rendered as a div element with the className of the given color. The 'Color' child components are able to reference the parent's state data to determine if they are the selected item, making changes to their className by appropriately adding the 'selected' styling class.