import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

// animation
const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0px;
    background-color: red;
  }
  50% {
    transform:rotate(360deg);
    border-radius: 100px;
    background-color: yellow;

  }
  100%{
    transform:rotate(0deg);
    border-radius: 0px;
    background-color: blueviolet;

  }
  `;

// Box
const Box = styled.div`
  background-color: salmon;
  height: 200px;
  width: 200px;
  animation: ${rotationAnimation} 10s linear infinite;
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;
