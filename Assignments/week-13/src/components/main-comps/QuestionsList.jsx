import React from "react";
import QuestionItem from '../sub-comps/QuestionItem'

const QuestionsList = ({ questions }) => (
  <div className="space-y-3">
    {questions.map((question) => (
      <QuestionItem key={question.id} question={question} />
    ))}
  </div>
);

export default QuestionsList;
