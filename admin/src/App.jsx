import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/user/:id">
            <User />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;