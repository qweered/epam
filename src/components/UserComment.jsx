import React from 'react';
import { Card } from 'react-bootstrap';
import {card} from "./NewsPage";

const UserComment = ( { id, content }) => {
  return (
    <Card className="mb-3 mt-3" style={card}>
      <Card.Body>
        <Card.Title>Comment ID: {id}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserComment;