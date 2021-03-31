import React, { useState } from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import "./index.css";

function Register(props) {

  const bcrypt = require('bcryptjs')

  const pathname = props.location.pathname

  console.log(pathname)

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    user_type: pathname
  })

  //this function handles all the changes made to the state variables
  const handleChange = (e) => {
    const { name, value } = e.target
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const sendDetailsToServer = () => {
    axios.post('http://0.0.0.0:8086/register',
      {
        name: state.name,
        email: state.email,
        password: bcrypt.hashSync(state.password, bcrypt.genSaltSync()),
        user_type: state.user_type
      })
      .then(response => {
        // console.log(response.data)

        var x = response.data

        console.log(x['success'])

        if (x['success'] === true) {
          alert("Sucess")
          //redirect to home page later on once it is created
          redirectToHome()
        }
        else {
          alert("Failure")
        }
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    // prevents the default form submit action to take place
    if (state.password === state.confirm_password) {
      sendDetailsToServer()

    } else {
      alert('Passwords do not match');
    }

  }

  console.log(state);

  const redirectToHome= () => {
    window.location.replace('/'); 
}
  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="form">

          <div className="form-group">
            <label htmlFor="name"> Full Name</label>
            <input type="text" placeholder="full name" name="name" value={state.name} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="email" name="email" value={state.email} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" name="password" value={state.password} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" placeholder="re-enter password" name="confirm_password" value={state.confirm_password} onChange={handleChange} required/>
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn" onClick={handleSubmitClick}>
          <i className="fas fa-user-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default withRouter(Register);