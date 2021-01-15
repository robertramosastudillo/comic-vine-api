import React, { useContext } from "react";
import { ComicContext } from "../context/ComicContext";

import { Image, Card, Button, CardHeader } from "../styles";
import { useHistory } from "react-router-dom";

const ComicListItem = ({ comic }) => {
  const { id, date_added, issue_number, image, api_detail_url, name } = comic;

  // Context
  const { setComicDetail } = useContext(ComicContext);

  const history = useHistory();

  const handleClickComicDetail = (id) => {
    setComicDetail(api_detail_url);
    history.push(`/comic/${id}`);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <h4>{name ? `${name} - ${issue_number}` : issue_number}</h4>

          <p>{date_added}</p>
        </CardHeader>

        <Image src={image.original_url} alt="" />

        <Button onClick={() => handleClickComicDetail(id)}>See more</Button>
      </Card>
    </>
  );
};

export default ComicListItem;
