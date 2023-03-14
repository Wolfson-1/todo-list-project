import "./stylesheet.css";
// eslint-disable-next-line import/extensions
 
 // function to remove all child elements
export const removeAllChildNodes = (parent) => {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      };