import { Link } from "react-router-dom";
// import { useContext } from "react";
import styled from "styled-components";

const Navbar = () => {
  //   const { user } = useContext(AuthContext);

  return (
    <Nav>
      <Container className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <Logo>Mosa-Book</Logo>
        </Link>
        {
          <div>
            <Button>Register</Button>
            <Button>Login</Button>
          </div>
        }
        {/* {user ? user.username : (
        <div>
          <Button>Register</Button>
          <Button>Login</Button>
        </div>
      )} */}
      </Container>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: 500;
`;

const Button = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
`;
