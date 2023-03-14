import "./stylesheet.css";
import {createUi, navDomInteraction} from "./domloader"

// create array for projects & todo items
// eslint-disable-next-line import/prefer-default-export, import/no-mutable-exports
export let projectsArr = [
  {
    name: "shopping",
    todo: ["test", "test", "test"],
  },
  {
    name: "work",
    todo: ["test2", "test2", "Test2"],
  },
  {
    name: "thisweek",
    todo: ["test3", "test3", "Test3"],
  },
];

// project constructor
export const projectConstructor = (name) => {
  let todo = [];

  const pushToArr = () => {
    projectsArr.push(this);
  };

  const delFromArr = () => {
    const myArray = projectsArr.filter((item) => item.name !== this.name);

    projectsArr = myArray;
  };

  return {name, todo, pushToArr, delFromArr};
};

// setup UI for todo page
createUi();


// eslint-disable-next-line no-unused-vars
/* const createUi = (() => {
  // main divs
  const mainDiv = document.querySelector(".content");

  const header = document.createElement("div");
  header.classList.add("header");

  const navPanel = document.createElement("div");
  navPanel.classList.add("navPanel");

  const mainPanel = document.createElement("div");
  mainPanel.classList.add("mainPanel");

  const footer = document.createElement("div");
  footer.classList.add("footer");

  mainDiv.appendChild(header);
  mainDiv.appendChild(navPanel);
  mainDiv.appendChild(mainPanel);
  mainDiv.appendChild(footer);

  // nav div setup
  const projContainer = document.createElement("div");
  projContainer.classList.add("projContainer");

  const projAddButton = document.createElement("button");
  projAddButton.classList.add("addButton");
  projAddButton.innerText = "Add";

  const nameInput = document.createElement("input")
  nameInput.classList.add("nameInput");
  nameInput.type = "text"; 
  nameInput.placeholder = "project name"; 



  navPanel.appendChild(projContainer);
  navPanel.appendChild(projAddButton);
  navPanel.appendChild(nameInput); 

      // event listener for add button
  
      projAddButton.addEventListener('click', () => {

        if (nameInput.value === "") {
          // eslint-disable-next-line no-alert
          alert("New project needs a name!");
        } else {
          const newProj = projectConstructor(nameInput.value);
          projectsArr.push(newProj);
          console.log(projectsArr);
          removeAllChildNodes(projContainer);
          navDomInteraction();
          nameInput.value = null;
        };
      });  

})(); */

// setup interactive elements for each window

// Dom loaders for proj & todos (for now until build into objects)

// dom loader for projects list & todo's
navDomInteraction();


// dom event listener for loading todos to main



// todo constructor

// todo constructor
// add required properties for each item
// add methods for adding, deleting, nessicary interaction
// add methods for implementing to dom
