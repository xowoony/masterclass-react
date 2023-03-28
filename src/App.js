import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

// Input 컴포넌트에 모두 required 를 적용하고 싶다면
// attrs를 이용하면 된다
//사용법은 다음과 같다
const Input = styled.input.attrs({ required: true })`
  background-color: black;
  color: white;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
