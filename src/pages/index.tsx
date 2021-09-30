import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Card } from "../components/Card/Card";
import axios from "axios";

const Home: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const req = axios.get("https://pokeapi.co/api/v2/pokedex/1/");
    req.then((res) => {
      setData(res.data.pokemon_entries);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <ul>
          {data.map((entry, i) => (
            <li key={entry.pokemon_species.name}>
              <Card name={entry.pokemon_species.name} />
            </li>
          ))}
        </ul>
        <Card name="Bulbasaur" />
      </main>
    </div>
  );
};

export default Home;
