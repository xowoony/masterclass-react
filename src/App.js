import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

// animation
const rotationAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

// Box
const Box = styled.div`
  background-color: salmon;
  height: 200px;
  width: 200px;
  animation: ${rotationAnimation} 1s linear infinite;
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;
