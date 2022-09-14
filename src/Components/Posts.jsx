import React from "react";
import { Accordion, Spinner } from "react-bootstrap";

const Posts = ({ currentPosts }) => {
  if (currentPosts.length === 0) {
    return <Spinner animation="border" className="mx-auto d-block" role="status" />;
  }
  return (
    <Accordion>
      {currentPosts.map((post) => (
        <Accordion.Item eventKey={post.id} key={post.id}>
          <Accordion.Header>{post.title}</Accordion.Header>
          <Accordion.Body>{post.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Posts;
