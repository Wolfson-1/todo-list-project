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

  //event listener for add button


})();


// setup interactive elements for each window

// create array for projects & todo items
let projectsArr = [
  {
    name: "shopping",
    todo: ["test","test","test"],
  },
  {
    name: "work",
    todo: ["test2","test2","Test2"],
  },
  {
    name: "thisweek",
    todo: ["test3","test3","Test3"],
  },
];


// Dom loaders for proj & todos (for now until build into objects)

//dom loader for projects list & todo's
const loadProjDom = () => {
 projectsArr.forEach((item) => {
  const projContainer = document.querySelector(".projContainer"); 
  
  const proj = document.createElement("div");
  proj.classList.add(item.name);

  proj.innerText = `${item.name}
  Todo: ${item.todo.length}`

  projContainer.appendChild(proj);

    // function to remove all child elements
    const removeAllChildNodes = (parent) => {
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
      }
  };

    // event listener for div to load todos to main nav on click
  proj.addEventListener('click', (e) => {

    const mainNav = document.querySelector(".mainPanel");

    removeAllChildNodes(mainNav);

    const newArr = projectsArr.filter((item) => item.name === e.target.className).map((x) => x.todo);

    console.log(newArr);

    newArr[0].forEach((item) => {

      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todoDiv");
      todoDiv.innerText = item;
      mainNav.appendChild(todoDiv);
    }) 

  });



 })};

loadProjDom(); 

// dom event listener for loading todos to main

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

//todo constructor


// todo constructor
  // add required properties for each item
  // add methods for adding, deleting, nessicary interaction
  // add methods for implementing to dom