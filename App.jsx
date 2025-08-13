import UserProfile from './UserProfile';
import styled from "styled-components";

function App() {

  const Heading2 = styled.h2`
  color:red;
  background-color : black;
  border: 5px solid green;
  border-radius: 5px;
  margin : 20px;
  padding:10px
  `

  const Heading = styled.h1({
  color:'pink',
    backgroundColor:'gray',
    padding:'10px',
    margin:'10px',
    borderRadius:'5px'
    
  })

  const StyleBtn =styled.button`
  color:white;
  background-color:blue;
  border-radius:3px;
  width:130px;
  height:40px;
  margin:20px;
  
  `
  return (
    <>
       <h1>Styling through CSS Modules</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>

      <h1>Styled-Components</h1>
      <h4>Two ways of using styled components</h4>
      
      <Heading>Hello heading!</Heading>
      <Heading2>Heading2</Heading2>
      <StyleBtn>Login</StyleBtn>
       <StyleBtn>Logout</StyleBtn>
    </>
  );
}
export default App;
