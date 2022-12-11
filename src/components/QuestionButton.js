// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function QuestionButton(props) {
  console.log(props.setQuestion)
  //The component must return some JSX
  const handleClick = () => {
    props.getAnswer()
    props.setQuestion("")
  }

  return (
    <div>
      <button className="getTrivia" onClick={handleClick}>
        Get Trivia
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