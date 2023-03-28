import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  width: 30rem;
  height: 30rem;
  margin-right: 1rem;
  background-color: red;
  color: white;
`;

function App() {
  return (
    <Father>
      <Btn>Login</Btn>
      <Btn as="a" href="/">
        Login
      </Btn>
      {/*이렇게 작성해주면 됨!*/}
    </Father>
  );
}

export default App;
