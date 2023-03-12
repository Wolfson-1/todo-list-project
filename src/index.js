import './stylesheet.css';

// setup divs for interactive windows
// eslint-disable-next-line no-unused-vars
const createUi = (() => {
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
})();


// setup interactive elements for each window


// create array for projects & todo items

// create constructors for adding new project & adding todo lists
    // add required properties for each item
    // add methods for adding, deleting, nessicary interaction
    // add methods for implementing to dom