import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const RquireAuth = () => {
  const [form, setForm] = useState({});
  useEffect(() => {
    setForm(JSON.parse(localStorage.getItem("form")) || null);
  }, []);
  return form ? <Outlet /> : <Navigate to={"/login"} replace={true} />;
};

export default RquireAuth;
