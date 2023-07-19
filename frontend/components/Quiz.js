import React, { useEffect } from 'react';
import { selectAnswer } from '../state/action-creators';
import { connect } from 'react-redux';
import { fetchQuiz, postAnswer } from '../state/action-creators';

//use use effect, ! check 

const Quiz = (props) => {
  const { quiz, selectedAnswer ,fetchQuiz, postAnswer, selectAnswer } = props;

  

  useEffect(() => {
    if (!quiz) {
      fetchQuiz();
    }
  }, []);




  const handleSelected1 = (e) => {
    e.preventDefault()
    selectAnswer(quiz.answers[0].answer_id)
  };
  const handleSelected2 = (e) => {
    e.preventDefault()
    selectAnswer(quiz.answers[1].answer_id)
   

  };

 
const handleSubmit = (e) => {
  e.preventDefault()
  postAnswer(quiz.quiz_id, selectedAnswer)
}

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${selectedAnswer === quiz.answers[0].answer_id ? 'selected' : ''}`}>
                {quiz.answers[0].text}
                <button onClick={handleSelected1}>
                {selectedAnswer === quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer ${selectedAnswer === quiz.answers[1].answer_id ? 'selected' : ''}`} >
                {quiz.answers[1].text}
                <button onClick={handleSelected2}>
                {selectedAnswer === quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={handleSubmit} disabled={!selectedAnswer}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}


export default connect(mapStateToProps, { selectAnswer, fetchQuiz, postAnswer })(Quiz)


