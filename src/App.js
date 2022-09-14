import { useState, useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import "./App.css";
import PaginationComponent from "./Components/PaginationComponent";
import PaginationPrevNexComp from "./Components/PaginationPrevNexComp";
import Posts from "./Components/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    setActive(currentPage);
  }, [currentPage]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateNext = () => {
    if (currentPage + 1 <= Math.ceil(posts.length / postsPerPage)) setCurrentPage(currentPage + 1);
  };
  const paginatePrev = () => {
    if (currentPage - 1 > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <Container fluid="md">
      <h1 className="mt-5 text-primary">My Blog</h1>

      <Posts currentPosts={currentPosts} />

      <ListGroup as="ul">
        <PaginationComponent postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} active={active} />
        <PaginationPrevNexComp postsPerPage={postsPerPage} totalPosts={posts.length} paginateNext={paginateNext} paginatePrev={paginatePrev} />
        <br /> page: {currentPage}
      </ListGroup>
    </Container>
  );
}

export default App;
