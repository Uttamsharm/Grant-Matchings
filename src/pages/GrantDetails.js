import React from "react";
import { useParams } from "react-router-dom";

const GrantDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Grant Details</h1>
      <p>Grant ID: {id}</p>
    </div>
  );
};

export default GrantDetails;
