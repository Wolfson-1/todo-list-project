import "./stylesheet.css";
import { projectsArr } from "./index";
// import { loadTodos } from "./domloader";
// todo constructor
export const todoConstructor = (
  parentproj,
  title,
  description,
  duedate,
  priority
) => ({ parentproj, title, description, duedate, priority });

// project constructor
export const projectConstructor = (name) => {
  let todo = [];

  /*     const pushToArr = () => {
      projectsArr.push(this);
    };
  
    const delFromArr = () => {
      const myArray = projectsArr.filter((item) => item.name !== this.name);
  
      projectsArr = myArray;
    }; */

  return { name, todo /* pushToArr, delFromArr */ };
};
