import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)` // Box 컴포넌트에서 border-radius추가
  border-radius: 3rem;
`;

function App() {
  return (
    <Father>
      <Box bgColor="red" />
      <Circle bgColor="blue"></Circle>
    </Father>
  );
}

export default App;
