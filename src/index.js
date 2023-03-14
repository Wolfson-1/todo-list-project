import "./stylesheet.css";
import {createUi, loadTodos, navDomInteraction} from "./domloader"

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

// todo constructor
const todoConstructor = (parentproj,title,description,duedate,priority) => {

  const pushToProj = () => {
    projectsArr.forEach((item) => {
        if(item.name == parentproj) {
          item.todo.push(this);
          loadTodos(parentproj);
        }
    });
  };

  return {title,description,duedate,priority,pushToProj}
};
// todo constructor
// add required properties for each item
// add methods for adding, deleting, nessicary interaction
// add methods for implementing to dom


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

// dom loader for projects list & todo's
navDomInteraction();



