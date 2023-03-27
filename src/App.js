import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor}; // 2
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="red" /> {/*1*/}
      <Box bgColor="blue" /> {/*1*/}
    </Father>
  );
}

export default App;
