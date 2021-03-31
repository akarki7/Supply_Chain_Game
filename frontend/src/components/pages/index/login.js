import React, { useState } from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import "./index.css";



function Login(props) {

  const bcrypt = require('bcryptjs')

  const pathname = props.location.pathname

  console.log(pathname)

  const [state, setState] = useState({
    email: "",
    password: "",
    user_type: pathname
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const authenticate_user = () => {
    axios.post('http://0.0.0.0:8086/auth',
      {
        name: state.name,
        email: state.email,
        user_type: state.user_type
      })
      .then(response => {
        // console.log(response.data)

        var x = response.data

        console.log(x['password'])

        if (x['password']===false)
        {
          alert("User not registered!!!")
        }
        else
        {
          const doesPasswordMatch = bcrypt.compareSync(state.password, x['password'])

          if (doesPasswordMatch) { //if passwords match
            redirectToDisplay()
          }
          else {
            alert("Wrong Password!!")
          }
        }
      })
      .catch(error => {
        console.log(error.response)
      });

  }

  const redirectToDisplay =() => {
    // props.history.push('/display')
    if (pathname==="/player"){
      window.location.replace('/display')
    }
    else{
      window.location.replace('/display_ins')

    }
}

  const handleSubmitClick = (e) => {
    e.preventDefault();
    // prevents the default form submit action to take place

    authenticate_user()

  }

  console.log(state);

  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text"  name="email" placeholder="email" value={state.email} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" value={state.password}  onChange={handleChange} required/>
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn"  onClick={handleSubmitClick}>
          <i className="fas fa-sign-in-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default withRouter(Login);