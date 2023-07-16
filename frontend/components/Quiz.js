import React, {useEffect} from 'react';
import { selectAnswer } from '../state/action-creators';
import { connect } from 'react-redux';
import { fetchQuiz, postAnswer } from '../state/action-creators';
import { useDispatch } from 'react-redux';

//use use effect, ! check 

const Quiz = (props) =>  {
 const {quiz} = props;
 const dispatch = useDispatch();


useEffect(()=> {
  dispatch(fetchQuiz())
}, [dispatch])

  const handleSelected = () => {

  }


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>Question: </h2>

            <div id="quizAnswers">
              <div className="answer">
               answer 
                <button onClick={handleSelected}>
                  SELECT
                </button>
              </div>

              <div className="answer seleceted " >
                Answer
                <button onClick={handleSelected}>
                  Select
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
    quiz: state.quiz,
    answer_id: state.answer_id,

  }
}


export default connect(mapStateToProps,{selectAnswer,fetchQuiz,postAnswer})(Quiz)