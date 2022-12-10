import { useState, useEffect } from "react"
import './App.css';
import Score from "./components/Score"
import QuestionButton from "./components/QuestionButton"
import Answer from "./components/Answer"

// Note: api has only answer, question, category objects in an array to use
function App() {
  //state to hold jeopardy dataa
  const [answer, setAnswer] = useState(null)

  const getAnswer = async (answerChoice) => {
    //make fecth request and store response (await promise)
    const response = await fetch(`https://jservice.io/api/random`)
    // Parse JSON response into JavaScript object
    const data = await response.json()

    setAnswer(data[0])
  }
  useEffect(() => {
    getAnswer()
  }, [])

  console.log(answer)

  return (
    <div className="App">
      <div>
        <h1>Welcome to Jeopardy!</h1>
      </div>
      <div>
        <Score />
      </div>
      <div>
        <QuestionButton getAnswer={getAnswer} />
      </div>
      <div>
        <Answer answer={answer} />
      </div>

    </div>
  );
}

export default App;
