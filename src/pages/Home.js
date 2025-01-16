import React, { useEffect, useState } from "react";
import { fetchGrants } from "../services/api";
import GrantCard from "../components/GrantCard";

const Home = () => {
  const [grants, setGrants] = useState([]);

  useEffect(() => {
    const getGrants = async () => {
      const data = await fetchGrants();
      setGrants(data);
    };
    getGrants();
  }, []);

  return (
    <div>
      <h1>Grants</h1>
      {grants.map((grant) => (
        <GrantCard key={grant.id} grant={grant} />
      ))}
    </div>
  );
};

export default Home;
