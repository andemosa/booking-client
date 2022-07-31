import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  // const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async () => {
    // dispatch({ type: "LOGIN_START" });
    // try {
    //   const res = await axios.post("/auth/login", credentials);
    //   dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
    //   navigate("/");
    // } catch (err) {
    //   dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    // }
  };

  return (
    <Wrapper>
      <Container>
        <Input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <Button disabled={true} onClick={handleClick}>
          Login
        </Button>
        {/* {error && <span>{error.message}</span>} */}
      </Container>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  height: 30px;
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  &:disabled {
    background-color: #0071c28c;
    cursor: not-allowed;
  }
`;
