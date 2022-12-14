
export default function Answer({ answer }) {
  const loaded = () => {

    return (
      <>
        <h1>{answer.answer}</h1>
        <h1 className="category">Category: {answer.category.title}</h1>
        <h1 className="points">Points: {answer.value}</h1>

        {/* answer.question is what you need to show your question/solution */}
      </>
    )
  }
  const loading = () => {
    return <h1>No Question Chosen</h1>
  }// if true loaded if false loading
  return answer ? loaded() : loading()
}