import React, { useContext, useEffect, useState } from "react";
import axiosClient from "../config/axios";
import { ComicContext } from "../context/ComicContext";
import Spinner from "../layout/Spinner";

const ComicDetail = () => {
  const [comic, setComic] = useState({});
  const [loading, setLoading] = useState(true);

  // Context
  const { comicDetail } = useContext(ComicContext);

  useEffect(() => {
    // Se recibe la url que se mando desde el Componente ComicListItem y se obtiene el id del comic que queremos mostrar del estado comicDetail aplicando una busqueda dentro del string
    let id = comicDetail.split("api")[1]; // /issues/4000/3

    // Aca mandariamos la peticion mandando como argumento el id del comic que sacamos anteriormente
    const getComic = async () => {
      const data = await axiosClient.get(id);
      setComic(data.data.results);
      setLoading(false);
      console.log(data.data.results);
    };

    getComic();
  }, []);

  const { image, character_credits, team_credits, location_credits } = comic;
  console.log(character_credits);
  console.log(team_credits);
  console.log(location_credits);

  return (
    <>
      <h1>Comic Detail</h1>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <img src={image.original_url} alt="" width="250" />

          <h4>Characters</h4>
          <ul>
            {character_credits.map((character) => (
              <li key={character.id}>{character.name}</li>
            ))}
          </ul>
          <h4>Teams</h4>
          <p>No hay registros</p>
          {/* {team_credits.length === 0 ? <p>No hay registros</p> : null} */}

          <h4>Locations</h4>
          <p>No hay registros</p>
          {/* {location_credits.length === 0 ? <p>No hay registros</p> : null} */}
        </>
      )}
    </>
  );
};

export default ComicDetail;
