import React, { useState } from "react";
import { Login } from "./pages/Login/index"
import { Register } from "./pages/Register/index"

import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  // Form Login & Register Toggle Function
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Body */}
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App
