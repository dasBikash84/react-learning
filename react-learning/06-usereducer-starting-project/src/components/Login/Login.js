import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/AuthContext';

const emailReducerFn = (prevState, action) => {
  const isEmailValid = (email) => email.includes('@');

  if (action.type === 'USER_INPUT' && action.val) {
    return { val: action.val, isValid: isEmailValid(action.val) };
  }

  if (action.type === 'FOCUS_OUT') {
    return { val: prevState.val, isValid: isEmailValid(prevState.val) };
  }

  return { val: '', isValid: isEmailValid('') };
};

const passwordReducerFn = (prevState, action) => {
  const isPasswordValid = (password) => password.length > 6;

  if (action.type === 'USER_INPUT' && action.val) {
    return { val: action.val, isValid: isPasswordValid(action.val) };
  }

  if (action.type === 'FOCUS_OUT') {
    return { val: prevState.val, isValid: isPasswordValid(prevState.val) };
  }

  return { val: '', isValid: isPasswordValid('') };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(AuthContext);

  const [emailData, reduceEmail] = useReducer(emailReducerFn, {
    val: '',
  });

  const [passwordData, reducePasword] = useReducer(passwordReducerFn, {
    val: '',
  });

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('EFFECT RUNNING to check form validity');
      setFormIsValid(
        emailData.isValid === true && passwordData.isValid === true
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailData.isValid, passwordData.isValid]);

  const emailChangeHandler = (event) => {
    reduceEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    reducePasword({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    reduceEmail({ type: 'FOCUS_OUT' });
  };

  const validatePasswordHandler = () => {
    reducePasword({ type: 'FOCUS_OUT' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.doLogin(emailData.val, passwordData.val);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailData.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailData.val}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordData.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordData.val}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
