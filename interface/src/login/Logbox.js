import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <input type="checkbox" id="signup_toggle" />
        <form className="form">
          <div className="form_front">
            <div className="form_details">Login</div>
            <input placeholder="Username" className="input" type="text" />
            <input placeholder="Password" className="input" type="text" />
            <button className="btn">Login</button>
            <span className="switch">Don't have an account? 
              <label className="signup_tog" htmlFor="signup_toggle">
                Sign Up
              </label>
            </span>
          </div>
          <div className="form_back">
            <div className="form_details">SignUp</div>
            <input placeholder="Firstname" className="input" type="text" />
            <input placeholder="Username" className="input" type="text" />
            <input placeholder="Password" className="input" type="text" />
            <input placeholder="Confirm Password" className="input" type="text" />
            <button className="btn">Signup</button>
            <span className="switch">Already have an account? 
              <label className="signup_tog" htmlFor="signup_toggle">
                Sign In
              </label>
            </span>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    display: absolute;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: all 1s ease;
  }

  .form .form_front {
    font-family: Six Caps, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    backface-visibility: hidden;
    padding: 65px 45px;
    border-radius: 15px;
    box-shadow: inset 2px 2px 10px rgba(0,0,0,1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .form .form_back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(-180deg);
    padding: 65px 45px;
    border-radius: 15px;
    box-shadow: inset 2px 2px 10px rgba(0,0,0,1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .form_details {
    font-size: 25px;
    font-weight: 600;
    padding-bottom: 10px;
    color: white;
  }

  .input {
    width: 245px;
    min-height: 45px;
    color: #fff;
    outline: none;
    transition: 0.35s;
    padding: 0px 7px;
    background-color: #212121;
    border-radius: 6px;
    border: 2px solid #212121;
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
    1px 1px 10px rgba(255, 255, 255, 0.6);
  }

  .input::placeholder {
    color: #999;
  }

  .input:focus.input::placeholder {
    transition: 0.3s;
    opacity: 0;
  }

  .input:focus {
    transform: scale(1.05);
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
    1px 1px 10px rgba(255, 255, 255, 0.6),
    inset 2px 2px 10px rgba(0,0,0,1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .btn {
    padding: 10px 35px;
    cursor: pointer;
    background-color: #212121;
    border-radius: 6px;
    border: 2px solid #212121;
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
    1px 1px 10px rgba(255, 255, 255, 0.6);
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    transition: 0.35s;
  }

  .btn:hover {
    transform: scale(1.05);
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
    1px 1px 10px rgba(255, 255, 255, 0.6),
    inset 2px 2px 10px rgba(0,0,0,1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .btn:focus {
    transform: scale(1.05);
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
    1px 1px 10px rgba(255, 255, 255, 0.6),
    inset 2px 2px 10px rgba(0,0,0,1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .form .switch {
    font-size: 13px;
    color: white;
  }

  .form .switch .signup_tog {
    font-weight: 700;
    cursor: pointer;
    text-decoration: underline;
  }

  .container #signup_toggle {
    display: none;
  }

  .container #signup_toggle:checked + .form {
    transform: rotateY(-180deg);
  }`;

export default Form;
