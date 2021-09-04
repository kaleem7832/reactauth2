import { useState, useEffect } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(sessionStorage.getItem("name"));
  });

  return <h1>Welcome, {name}!</h1>;
};
export default Dashboard;
