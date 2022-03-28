import React from "react";
import { useSelector } from "react-redux";
import LoginPage from "./loginPage/loginPageComp";
import ContactPage from "./contactPage/ContactPageComp";



export default function ContactList() {
  const validation = useSelector(state => state.login.validation);
  return (
    <div>
      {validation ? <ContactPage /> : <LoginPage />}
    </div>
  )
}