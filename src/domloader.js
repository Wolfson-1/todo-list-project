import "./stylesheet.css";
import { projectsArr } from "./index";
import { projectConstructor, todoConstructor } from "./constructors";
// eslint-disable-next-line import/extensions

// function to remove all child elements
// eslint-disable-next-line import/prefer-default-export

// create element & append
export const createElement = (type, tag, inner, parent) => {
  let el = document.createElement(type);
  el.classList.add(tag);
  el.innerHTML = inner;
  parent.appendChild(el);
};

// function removes all child nodes in a div
export const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

// function loads todos to main panel div
export const loadTodos = (projname) => {
  const mainNav = document.querySelector(".mainPanel");

  removeAllChildNodes(mainNav);

  const newArr = projectsArr
    .filter((item) => item.name.replace(/\s/g, "") === projname)
    .map((x) => x.todo);

  if (newArr.length > 0) {
    newArr[0].forEach((item) => {
      
    // create todo div to append todo information
    const todoDiv = document.createElement("div");
    todoDiv.classList.add(`${projname}todo`);


    // create divs for todo details
     createElement("div",null,item.title,todoDiv);
     createElement("div",null,item.duedate,todoDiv);
     createElement("div",null,item.description,todoDiv);
     createElement("div",null,item.priority,todoDiv);
     createElement("button",`delete${item.title}`,"Delete",todoDiv);

    
     mainNav.appendChild(todoDiv);

     // event listener for delete button
     const delTodoButton = document.querySelector(`.delete${item.title}`);
 
     delTodoButton.addEventListener('click',(e) => {
 
       projectsArr.forEach((items) => {
         if (items.name.replace(/\s/g, "") === e.target.parentElement.classList.value.replace(/todo/,"")) {
           items.todo.forEach((beop) => {
             if (beop.title.replace(/\s/g, "") === e.target.classList.value.replace(/delete/,"")) {
             items.todo.splice(items.todo.indexOf(beop),1);
             };
           })
           
           loadTodos(e.target.parentElement.classList.value.replace(/todo/,""));
           navDomInteraction();
         }
       });
     })

   });
  };  

  // create addTodo div so user can add divs in each window
  createElement("div", `${projname}add`, "Add", mainNav);

  const addTodoDiv = document.querySelector(`.${projname}add`);
  createElement("button", "addTodoButton", "+", addTodoDiv);

  const addTodoButton = document.querySelector(".addTodoButton");

  addTodoButton.addEventListener("click", () => {
    const modalSelector = document.querySelector(".modalDiv");
    modalSelector.classList.add("active");

    const overlaySelector = document.querySelector(".modalOverlay");
    overlaySelector.classList.add("active");
  });
};

export const navDomInteraction = () => {
  // clear projects div
  removeAllChildNodes(document.querySelector(".projContainer"));
  const projContainer = document.querySelector(".projContainer");

  // loads dom objects to nav panel
  projectsArr.forEach((item) => {

    const proj = document.createElement("div");
    proj.classList.add(item.name.replace(/\s/g, ""));

    proj.innerText = `${item.name}
        Todo: ${item.todo.length}`;

    projContainer.appendChild(proj);

        // event listener for div to load todos to main nav on click
        proj.addEventListener("click", (e) => {
          // load todo's for specific projects on click
          if (e.target.className === item.name.replace(/\s/g, "")) {  
          loadTodos(e.target.className);
          };
        });

        if (item.name !== "General") {
          createElement("button",`projDelButton${item.name.replace(/\s/g, "")}`,"Del",proj);

          const projDelButton = document.querySelector(`.projDelButton${item.name.replace(/\s/g, "")}`);

          projDelButton.addEventListener('click',(e) => {
  
            projectsArr.forEach((obj) => {
              if (obj.name.replace(/\s/g, "") === e.target.parentElement.classList.value.replace(/\s/g, "")) {
                projectsArr.splice(projectsArr.indexOf(item),1)
                navDomInteraction();
              }
            });
            
            removeAllChildNodes(document.querySelector(".mainPanel"));
          });
        };
  });
};



// addTodoModal
export const laodModal = () => {
  const mainDiv = document.querySelector(".content");

  // overlay whilst modal is open
  createElement("div", "modalOverlay", null, mainDiv);

  // create modal
  createElement("div", "modalDiv", null, mainDiv);
  const modalDiv = document.querySelector(".modalDiv");

  // create button to close modal
  createElement("button", "closeModal", "X", modalDiv);
  const closeModal = document.querySelector(".closeModal");
  closeModal.addEventListener("click", () => {
    modalDiv.classList.remove("active");

    const modalOverlay = document.querySelector(".modalOverlay");
    modalOverlay.classList.remove("active");
  });

  // create form
  createElement("form", "todoform", null, modalDiv);
  const todoform = document.querySelector(".todoform");

  // create title input
  createElement("label", "todoNameLabel", "Name", todoform);
  const todoNameLabel = (document.querySelector(".todoNameLabel").htmlFor = "todoName");
  createElement("input", "todoName", null, todoform);
  const todoName = document.querySelector(".todoName");
  todoName.type = "text";

  // create due date
  createElement("label", "todoDateLabel", "Due Date", todoform);
  const todoDateLabel = (document.querySelector(".todoDateLabel").htmlFor = "todoDate");
  createElement("input", "todoDate", null, todoform);
  const todoDate = document.querySelector(".todoDate");
  todoDate.type = "date";

  // create description
  createElement("label", "todoDescLabel", "Description", todoform);
  const todoDescLabel = (document.querySelector(".todoDescLabel").htmlFor = "todoDesc");
  createElement("input", "todoDesc", null, todoform);
  const todoDesc = document.querySelector(".todoDesc");
  todoDesc.type = "Text";

  // load priority
  createElement("label", "todoPriorityLabel", "Priority", todoform);
  const todoPriorityLabel = (document.querySelector(".todoDescLabel").htmlFor = "todoPriority");
  createElement("input", "todoPriority", null, todoform);
  const todoPriority = document.querySelector(".todoPriority");
  todoPriority.type = "Text";

  // add button to push new todo to relevant project
  createElement("button", "addTodo", "Add", modalDiv);
  const addTodo = document.querySelector(".addTodo");

  addTodo.addEventListener("click", () => {
    let mainNav = document.querySelector(".mainPanel").firstChild.classList.value
    let finishedNav = "";

    // if statement for if there are no todos.
    if (mainNav.slice(-3) === "add") {
      finishedNav = mainNav.replace(/add/,"");
      console.log(finishedNav);
    } else {
      finishedNav = mainNav.replace(/todo/,"");
      console.log(finishedNav);
    };

    let newTodo = todoConstructor(
      finishedNav,
      todoName.value,
      todoDesc.value,
      todoDate.value,
      todoPriority.value
    );

    projectsArr.forEach((item) => {
      if (item.name.replace(/\s/g, "") === newTodo.parentproj) {
        item.todo.push(newTodo);
      }
    });

// clear & close modal
todoName.value = "";
todoDesc.value = "";
todoDate.value = "";
todoPriority.value = "";

const modal = document.querySelector(".modalDiv").classList.remove("active");
const modalOverlay = document.querySelector(".modalOverlay").classList.remove("active");

// reload projects (for counters)
navDomInteraction();
// reload todos
loadTodos(finishedNav);

  });
};

export const createUi = () => {
  // main divs
  const mainDiv = document.querySelector(".content");

  createElement("div","header",null,mainDiv);
  createElement("div","navPanel",null,mainDiv);
  createElement("div","mainPanel",null,mainDiv);
  createElement("div","footer",null,mainDiv);

  const navPanel = document.querySelector(".navPanel");

  // nav div setup
  createElement("div","projContainer",null,navPanel);
  const projContainer = document.querySelector(".projContainer");
  createElement("button","addButton","Add",navPanel);
  const projAddButton = document.querySelector(".addButton");
  createElement("input","nameInput",null,navPanel);
  const nameInput = document.querySelector(".nameInput");
  nameInput.type = "text";
  nameInput.placeholder = "project name";

  // event listener for add button
  projAddButton.addEventListener("click", () => {
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
    }
  });
};
