import "./stylesheet.css";

// setup UI for todo page
// eslint-disable-next-line no-unused-vars
const createUi = (() => {
  
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

  navPanel.appendChild(projContainer);
  navPanel.appendChild(projAddButton);

})();

// add event listeners


// setup interactive elements for each window

// create array for projects & todo items
let projectsArr = [
  {
    name: "shopping",
    todo: [],
  },
  {
    name: "work",
    todo: [],
  },
  {
    name: "this week",
    todo: [],
  },
];


// create constructors for adding new project & adding todo lists

// project constructor
const projectConstructor = (name) => {
    
    let todo = []
    
    const pushToArr = () => {
      projectsArr.push(this);
    };

    const delFromArr = () => {
     const myArray = projectsArr.filter((item) => item.name !== this.name);

     projectsArr = myArray;
    };

    const addToDiv = () => {
        const navPanelSelect = document.querySelector(".navPanel");

        let projectDiv = document.createElement("div");
        projectDiv.innerText = name.value;
        navPanelSelect.appendChild(projectDiv);

    };


  return {name, todo, projectConstructor, pushToArr, delFromArr}
}

// todo constructor
  // add required properties for each item
  // add methods for adding, deleting, nessicary interaction
  // add methods for implementing to dom




