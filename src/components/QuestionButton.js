import { useState, useEffect } from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function QuestionButton(props) {
  //The component must return some JSX
  const handleClick = () => {
    props.getAnswer()
  }

  return (
    <div>
      <button onClick={handleClick}>
        Get Question
      </button>
    </div>
  );
};












// export default function Button({ question }) {
//   return (
//     <button className="btn btn-primary">
//       Get Question
//     </button>
//   );
// }