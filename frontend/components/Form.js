import React from 'react'
import { connect } from 'react-redux';
import { resetForm , inputChange, postQuiz} from '../state/action-creators';


const  Form =(props)=>  {
  const { form, resetForm, inputChange , postQuiz} = props;

  const isSubmitDisabled = () => {
    return (
      form.newQuestion.trim().length < 1 ||
      form.newTrueAnswer.trim().length < 1 ||
      form.newFalseAnswer.trim().length < 1
    );
  };

  const onChange = evt => {
   
   const { id, value} = evt.target;
   inputChange(id,value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz({
      question_text: form.newQuestion,
      true_answer_text: form.newTrueAnswer,
      false_answer_text: form.newFalseAnswer,
    });
  }
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion"value={form.newQuestion} placeholder='Enter Question' />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" value={form.newTrueAnswer}placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" value={form.newFalseAnswer}placeholder="Enter false answer" />
      <button id="submitNewQuizBtn"disabled={isSubmitDisabled()}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = (state) => {
 
  return {
   form: state.form,
  }
}

export default connect(mapStateToProps, {resetForm,inputChange , postQuiz})(Form)
