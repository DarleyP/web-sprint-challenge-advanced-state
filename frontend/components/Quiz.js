import React, {useEffect} from 'react';
import { selectAnswer } from '../state/action-creators';
import { connect } from 'react-redux';
import { fetchQuiz, postAnswer } from '../state/action-creators';
import { useDispatch } from 'react-redux';
//use use effect, ! check 

const Quiz = (props) =>  {
 const {quiz, fetchQuiz, postAnswer, selectAnswer} = props;
 
 console.log('quiz', {quiz})

 useEffect(()=> {
  if (!quiz) {
    fetchQuiz();
  }
 },[]);

 
 

  const handleSelected1 = (e) => {
   e.preventDefault()
   
   console.log(quiz.answers[0].answer_id)

    selectAnswer(quiz.answers[0].answer_id)
  };


  const handleSelected2 = (e) => {
    e.preventDefault()
    
     console.log()
   
     
   };


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer">
              {quiz.answers[0].text}
                <button onClick={handleSelected1}>
                  {}
                </button>
              </div>

              <div className="answer" >
              {quiz.answers[1].text}
                <button onClick={handleSelected2}>
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    quiz: state.quiz
  }
}


export default connect(mapStateToProps,{selectAnswer,fetchQuiz,postAnswer})(Quiz)


