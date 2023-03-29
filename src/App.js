import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 100vh;
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

// Emoji
const Emoji = styled.span`
font-size: 36px; // 기본값 36px
`;  

// Box
const Box = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
 
  height: 200px;
  width: 200px;
  animation: ${rotationAnimation} 10s linear infinite;
  // target처리
  ${Emoji} {
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
        <Emoji as="div">🐠</Emoji>
      </Box>
      <Emoji as="div">🐷</Emoji> {/*얘는 타겟팅에 해당되지 않음*/}
    </Wrapper>
  );
}

export default App;
