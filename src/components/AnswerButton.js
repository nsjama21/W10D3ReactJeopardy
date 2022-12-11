export default function AnswerButton({ answer, question, setQuestion }) {
  const loaded = () => {

    const handleClick = () => {
      setQuestion(answer.question)
    }

    return (
      <>
        <button className="getAnswer" onClick={handleClick}>Get Answer</button>

        <h1>Question: {question} </h1>

        {/* answer.question is what you need to show your question/solution */}
      </>
    )
  }
  const loading = () => {
    return <h1>No Question Chosen</h1>
  }// if true loaded if false loading
  return answer ? loaded() : loading()
}

