import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Home from "./pages/Home";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Sidebar />
        <Home />
      </Container>
    </div>
  );
};

export default App;