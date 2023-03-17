import "./stylesheet.css";
import { createUi, loadTodos, navDomInteraction, laodModal } from "./domloader";
import { todoConstructor, projectConstructor } from "./constructors";

// create array for projects & todo items
// eslint-disable-next-line import/prefer-default-export, import/no-mutable-exports
export let projectsArr = [
  {
    name: "tester",
    todo: [
      {
        title: "test1",
        duedate: "01.01.2023",
        description: "This is a test desctiption of a test todo list item",
        priority: "high"
      },
    ],
  },
];

// setup UI for todo page
createUi();

// dom loader for projects list & todo's
navDomInteraction();

// loads modal
laodModal();
