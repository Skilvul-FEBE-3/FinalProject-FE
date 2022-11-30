import React, { useState } from "react";
import Logo from "../../images/MentalHack.png";
import Hero from "../../images/Dokter.png";
import HeroBg from "../../images/hero-bg.png";
import LoginCard from "../../components/Login";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //   console.log(email);
  };
  return (
    <div>
      {/*
       */}
      <div>
        <LoginCard />
      </div>
    </div>
  );
}

export default Login;
