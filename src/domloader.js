import "./stylesheet.css";
import {projectsArr, projectConstructor} from "./index"
// eslint-disable-next-line import/extensions
 
 // function to remove all child elements
// eslint-disable-next-line import/prefer-default-export
export const removeAllChildNodes = (parent) => {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      };

      export const navDomInteraction = () => {
 
        // loads dom objects to nav panel
        projectsArr.forEach((item) => {
          const projContainer = document.querySelector(".projContainer");
      
          const proj = document.createElement("div");
          proj.classList.add(item.name);
      
          proj.innerText = `${item.name}
        Todo: ${item.todo.length}`;
      
          projContainer.appendChild(proj);
      
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

