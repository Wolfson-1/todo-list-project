import "./stylesheet.css";

// create array for projects & todo items
let projectsArr = [
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
const projectConstructor = (projName) => {
  let todo = [];

  const pushToArr = () => {
    projectsArr.push(this);
  };

  const delFromArr = () => {
    const myArray = projectsArr.filter((item) => item.name !== this.name);

    projectsArr = myArray;
  };

  return {projName, todo, pushToArr, delFromArr};
};

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

  const newProjForm = document.createElement("form");
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
          nameInput.value = null;
        };
      });  

})();

// setup interactive elements for each window



// Dom loaders for proj & todos (for now until build into objects)

// dom loader for projects list & todo's
const navDomInteraction = () => {
 
  // loads dom objects to nav panel
  projectsArr.forEach((item) => {
    const projContainer = document.querySelector(".projContainer");

    const proj = document.createElement("div");
    proj.classList.add(item.name);

    proj.innerText = `${item.name}
  Todo: ${item.todo.length}`;

    projContainer.appendChild(proj);

    // function to remove all child elements
    const removeAllChildNodes = (parent) => {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    };

    // event listener for div to load todos to main nav on click
    proj.addEventListener("click", (e) => {
      const mainNav = document.querySelector(".mainPanel");

      removeAllChildNodes(mainNav);

      const newArr = projectsArr
        .filter((item) => item.name === e.target.className)
        .map((x) => x.todo);

      console.log(newArr);

      newArr[0].forEach((item) => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todoDiv");
        todoDiv.innerText = item;
        mainNav.appendChild(todoDiv);
      });
    });
  });
};

navDomInteraction();


// dom event listener for loading todos to main



//todo constructor

// todo constructor
// add required properties for each item
// add methods for adding, deleting, nessicary interaction
// add methods for implementing to dom
