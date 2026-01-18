// 1️⃣ What is a Component? (MOST IMPORTANT)

// 👉 React is made of components
// A component is just a JavaScript function that returns UI (JSX).

// Example:
// function App() {
//   return <h1>Hello React</h1>;
// }


// 📌 Key notes:

// Component name must start with a Capital letter

// It returns JSX (HTML-like syntax)

// One component = one piece of UI

// 🧠 Think:
// Component = reusable UI block

// 2️⃣ JSX (JavaScript + HTML)

// 👉 JSX lets you write HTML inside JavaScript.

// Example:
// const name = "React";

// function App() {
//   return <h2>Hello {name}</h2>;
// }


// 📌 Key notes:

// Looks like HTML but it’s JSX

// {} is used to write JavaScript inside JSX

// JSX must return one parent element

// Example (correct):

// return (
//   <div>
//     <h1>Title</h1>
//     <p>Description</p>
//   </div>
// );

// 📝 Your ZERO-Level Notes Summary
// 1. React works using components.
// 2. A component is a JS function that returns JSX.
// 3. JSX allows writing HTML inside JS.
// 4. Use {} to write JS inside JSX.
// 5. JSX must have one parent element.

// ==============================
// ⚛️ React.js Revision – Day 2
// ==============================


//  2  Props (Passing Data to Components)

// 👉 Props are used to pass data from one component to another.

// Example:
//
/*
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return <Greeting name="React" />;
}
*/


// 📌 Key notes:
//
// Props are read-only (cannot be changed inside the component)
//
// Props are passed like HTML attributes
//
// Data flows from parent → child
//
// Props help make components reusable


// 🧠 Think:
// Props = function parameters for components



//  4 Destructuring Props (Clean & Professional)

// 👉 Instead of using props.name, we can destructure props.

// Example:
//
/*
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
*/


// 📌 Key notes:
//
// Destructuring makes code cleaner
//
// Very common in real projects
//
// Improves readability


// 📝 Day 2 Notes Summary:
//
// 1. Props are used to send data to components.
// 2. Props flow from parent to child only.
// 3. Props are read-only.
// 4. Props are passed like HTML attributes.
// 5. Destructuring props is clean and preferred.
