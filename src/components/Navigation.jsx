import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";
import { useHabits } from "../context/HabitsContext";

function Navigation() {
  const { habits } = useHabits();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Habit Tracker
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Habits
            </Nav.Link>
            <Nav.Link as={Link} to="/weekly">
              Weekly view
            </Nav.Link>
          </Nav>
          <Button variant="primary" className="ms-3">
            Habits
            <Badge bg="secondary" className="ms-2">{habits.length}</Badge>
            <span className="visually-hidden">Habits count</span>
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
