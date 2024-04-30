import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [user, setUser] = useState({
    
    First_name:"",
    Last_name:"",
    Email:"",
    User_name:"",
    Password:""
  });
  const signup = ()=>{
    console.log(user);
    axios.post("http://localhost:3000/signup",user).then((res)=>{
        console.log(res);
        alert("user added successfully");
    }).catch((err)=>{
        console.log(err);
    })
  }
  const [user1, setUser1] = useState({
    
    User_name:"",
    Password:""
  });
  const login = ()=>{
    axios.post("http://localhost:3000/login",user1).then((res)=>{
        console.log(res);
        alert(res.data.massage);
    }).catch((err)=>{
        alert("something went wrong");
        console.error("error",err);
    });
  }; 
  
  
  return (
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div class="signup">
        <label for="chk" aria-hidden="true">
          Sign up
        </label>
        <input
          type="text"
          name="First_name"
          value={user.First_name}
          onChange={(e) => setUser({ ...user,First_name:e.target.value })}
          placeholder="Firstname"
          required=""
        />
        <input
          type="text"
          name="Last_name"
          value={user.Last_name}
          onChange={(e) => setUser({...user,Last_name:e.target.value })}
          placeholder="Lastname"
          required=""
        />
        <input
          type="text"
          name="Email"
          value={user.Email}
          onChange={(e) => setUser({ ...user,Email:e.target.value })}
          placeholder="Email"
          required=""
        />
        <input
          type="text"
          name="User_name"
          value={user.User_name}
          onChange={(e) => setUser({ ...user,User_name:e.target.value })}
          placeholder="User_name"
          required=""
        />
        <input
          type="password"
          name="pswd"
          value={user.Password}
          onChange={(e) => setUser({ ...user,Password:e.target.value })}
          placeholder="Password"
          required=""
        />
        <button onClick={signup}>Sign up</button>
      </div>

      <div class="login">
        <label for="chk" aria-hidden="true">
          Login
        </label>
        <input
        type="text"
        name="User_name"
        value={user1.User_name}
        onChange={(e) => setUser1({ ...user1,User_name:e.target.value })}
        placeholder="User_name"
        required=""
         />
        <input
        type="password"
        name="pswd"
        value={user1.Password}
        onChange={(e) => setUser1({ ...user1,Password:e.target.value })}
        placeholder="Password"
        required="" 
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Form;
