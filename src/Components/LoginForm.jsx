import React from "react";
import "../scss/LoginForm.css"

const LoginForm = () => {
    

  return <div className="login-form">
    
        <div className="image-container"></div>


            <div className="wrapper">
  <form>
   
    <div className="group">
      <input type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Name</label>
    </div>
    <div className="group">
      <input type="text" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Email</label>
    </div>
    <div className="group">
      <input type="password" id="password" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Password</label>
    </div>
    <div className="group">
      <input type="password" required="required"/><span className="highlight"></span><span className="bar"></span>
      <label>Re-enter Password</label>
    </div>
    <div className="btn-box">
      <button className="button-56" type="submit">submit</button>
      <button className="button-56" type="reset">cancel</button>
    </div>
  </form>
</div>
    
  </div>;
};

export default LoginForm;
