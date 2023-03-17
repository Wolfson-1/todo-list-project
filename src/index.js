import "./stylesheet.css";
import { createUi, loadTodos, navDomInteraction, laodModal } from "./domloader";
import { todoConstructor, projectConstructor } from "./constructors";

// create array for projects & todo items
// eslint-disable-next-line import/prefer-default-export, import/no-mutable-exports
export let projectsArr = [
  {
    name: "main",
    todo: [],
  },
];

// setup UI for todo page
createUi();

// dom loader for projects list & todo's
navDomInteraction();

//loads modal
laodModal();
