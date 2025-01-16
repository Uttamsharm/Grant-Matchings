import React from "react";
import { Link } from "react-router-dom";

const GrantCard = ({ grant }) => {
  return (
    <div>
      <h3>{grant.title}</h3>
      <Link to={`/grants/${grant.id}`}>View Details</Link>
    </div>
  );
};

export default GrantCard;
