import styled from "styled-components";

const MailList = () => {
  return (
    <Container>
      <h1>Save time, save money!</h1>
      <span>Sign up and we'll send the best deals to you</span>
      <InputCon>
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </InputCon>
    </Container>
  );
};

export default MailList;

const Container = styled.section`
  width: 100%;
  margin-top: 50px;
  background-color: #003580;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
`;

const InputCon = styled.div`
  & > input {
    width: 300px;
    height: 30px;
    padding: 10px;
    border: none;
    margin-right: 10px;
    border-radius: 5px;
  }
  & > button {
    height: 50px;
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
