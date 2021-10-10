import { useState, useEffect } from "react";

import Auth from "./../auth/auth"

import { useHistory } from "react-router-dom";



const Dashboard = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(sessionStorage.getItem("name"));
  });

  const history = useHistory();


  const Signout = () => {
    Auth.signout();
    history.push("/");
  }

  return (<>
    <h1>Welcome, {name}!</h1>
    <button onClick={Signout}>  Sign out!</button>
  </>);
};
export default Dashboard;
