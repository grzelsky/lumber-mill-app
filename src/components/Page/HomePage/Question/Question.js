import React from 'react';
import { NavLink } from 'react-router-dom';
import './Question.scss';

const Question = () => {
  return (
    <div className="question">
      <h2>Ready to take your business to the next level? Let's talk.</h2>
      <NavLink to='/contact'><button>Schedule a Free Consultation</button></NavLink>

    </div>
  );
}

export default Question;