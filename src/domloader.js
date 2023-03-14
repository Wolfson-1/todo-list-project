import "./stylesheet.css";
import {projectsArr, projectConstructor} from "./index"
// eslint-disable-next-line import/extensions
 
 // function to remove all child elements
// eslint-disable-next-line import/prefer-default-export

// create element & append 
export const createElement = (type,tag,inner,parent) => {
        let el = document.createElement(type);
        el.classList.add(tag);
        el.innerHTML = inner;
        parent.appendChild(el);
}

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
          .filter((item) => item.name.replace(/\s/g, '') === projname)
          .map((x) => x.todo);
  
        newArr[0].forEach((item) => {
          const todoDiv = document.createElement("div");
          todoDiv.classList.add("todoDiv");
          todoDiv.innerText = item;
          mainNav.appendChild(todoDiv);
        });

        // create addTodo div so user can add divs in each window
        createElement("div","addTodoDiv","Add",mainNav);
        
        const addTodoDiv = document.querySelector(".addTodoDiv");
        createElement("button","addTodoButton","+",addTodoDiv);

        const addTodoButton = document.querySelector(".addTodoButton");

      };


      export const navDomInteraction = () => {
 
        // loads dom objects to nav panel
        projectsArr.forEach((item) => {
          const projContainer = document.querySelector(".projContainer");
      
          const proj = document.createElement("div");
          proj.classList.add(item.name.replace(/\s/g, ''));
      
          proj.innerText = `${item.name}
        Todo: ${item.todo.length}`;
      
          projContainer.appendChild(proj);
      
          // event listener for div to load todos to main nav on click
          proj.addEventListener("click", (e) => {
            // load todo's for specific projects on click
            loadTodos(e.target.className);
          });
        });
      };

export const createUi = () => {
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
      
      };

