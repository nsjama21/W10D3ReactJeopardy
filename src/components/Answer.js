
// import { useState, useEffect } from "react";

// // Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
// export default function Answer(props) {
//   //The component must return some JSX
//   const handleClick = () => {
//     props.getAnswer()
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>
//         Get Trivia
//       </button>
//     </div>
//   );
// };







export default function Answer({ answer }) {
  const loaded = () => {
    return (
      <>
        <h1>{answer.answer}</h1>
        <button>Get Answer</button>
        {/* <h1>{answer.question}</h1>  */}

        {/* answer.question is what you need to show your question/solution */}
      </>
    )
  }
  const loading = () => {
    return <h1>No Question Chosen</h1>
  }// if true loaded if false loading
  return answer ? loaded() : loading()
}