import { createContext, useContext, useState } from 'react';
import { _setItem } from '../store/store';
import { useNavigate } from 'react-router-dom';

const AnswerContext = createContext();

export const useAnswer = () => useContext(AnswerContext);

const AnswerProvider = ({ children }) => {
  // selected option of question 1 on homepage is stored in answer1
  const [answer1, setAnswer1] = useState('');
  // selected option of question 2 on homepage is stored in answer2
  const [answer2, setAnswer2] = useState('');

  const navigate = useNavigate();

  // both these answers are then stored in localstorage on submission
  const handleSubmit = () => {
    _setItem('a1', answer1);
    _setItem('a2', answer2);
    navigate('/mode-choice');
  };

  return (
    <AnswerContext.Provider
      value={{
        answer1,
        answer2,
        setAnswer1,
        setAnswer2,
        handleSubmit,
      }}
    >
      {children}
    </AnswerContext.Provider>
  );
};

export default AnswerProvider;
