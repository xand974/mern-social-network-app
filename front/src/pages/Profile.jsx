import React from "react";
import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const USER_ID = location.pathname.split("/")[2];
  return <div>{USER_ID}</div>;
}
