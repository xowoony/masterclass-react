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
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: salmon;
  height: 200px;
  width: 200px;
  animation: ${rotationAnimation} 10s linear infinite;
  // target처리
  span {
    font-size: 2rem;
    &:hover {
      font-size: 5rem;
      background-color: black;
    }
    &:active{
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>🤣</span>
      </Box>
    </Wrapper>
  );
}

export default App;
