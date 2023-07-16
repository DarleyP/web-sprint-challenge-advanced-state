import React from 'react';
import { connect } from 'react-redux';


 const Message = (props)  => {
  return <div id="message">Nice job!</div>
}

const mapStateToProps = () => {
  return {}
}

export default connect()(Message)