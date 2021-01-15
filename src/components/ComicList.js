import React, { useEffect, useState } from "react";

// Al ver que la API no funcionaba se creo un archivo con los datos para trabajar mientras se intentaba solucionar el error de CORS
import { comicvineApi } from "../config/data";

// Client
import axiosClient from "../config/axios";

// Components
import ComicListItem from "./ComicListItem";
import Spinner from "../layout/Spinner";

//  Styled Components
import { Container } from "../styles";

const ComicList = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getComicList = async () => {
      // Asi se mandaria peticion si la API funcionara correctamente
      const data = await axiosClient.get("/issues");
      setComics(data.data.results);

      // Asi se mandaria peticion si s eobtiene los datos del archivo data
      // const data = comicvineApi.results;
      // setComics(data);

      setLoading(false);
    };

    getComicList();
  }, []);

  return (
    <>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          comics.map((comic) => <ComicListItem key={comic.id} comic={comic} />)
        )}
      </Container>
    </>
  );
};

export default ComicList;
