import './App.css';
import QuestionBox from './QuestionBox';
import {useState, useEffect} from 'react';
import axios from 'axios';
function App() {

  const [questions, setQuestions] = useState([]);
  const [questionInfo, setQuestionInfo] = useState({
    question: "default",
    answers: [1,2,3,4]
    });
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState('');

  const setQuestion = (newQuestionNumber) => {
    setCurrentQuestion(newQuestionNumber);
    let qInfo = questions[newQuestionNumber];
    setCorrectAnswer(qInfo.answers[0]);
    setQuestionInfo({
      question: qInfo.question,
      answers: qInfo.answers.sort(() => .5 - Math.random())
    });
  }
  useEffect(() => {
    axios.get("http://localhost:5000/questions").then(res =>{
      let qBank = res.data;
      setQuestions(qBank);
      setCorrectAnswer(qBank[0].answers[0]);
      setQuestionInfo({
        question: qBank[0].question,
        answers: qBank[0].answers.sort(() => .5 - Math.random())
      });
    });
  }, []);

  return (
    <div>
      <header>
        <div class="arrow arrow-left" onClick={() => {
          setQuestion(currentQuestion - 1)
        }}></div>
        <p>Question {currentQuestion + 1}</p>
        <div class="arrow arrow-right" onClick={() => {
          setQuestion(currentQuestion + 1)
        }}></div>
      </header>
      <QuestionBox 
        question={questionInfo.question}
        answers={questionInfo.answers}
        correct={correctAnswer} />
    </div>
  );
}

export default App;