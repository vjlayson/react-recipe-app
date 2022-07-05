import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  color: yellow;
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px #555;
`;

const AppNameComponent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const AppIcon = styled.img`
  width: 60px;
  height: 60px;
  margin: 15px;
`;

const SearchComponent = styled.div`
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
border-radius: 6px;
width: 50%;
`;

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="/crab.svg" />
          Recipe App
        </AppNameComponent>
        <SearchComponent>
          <img src="/search-icon.svg" />
          <input />
        </SearchComponent>
      </Header>
      Vanessa Joyo
    </Container>
  );
}

export default App;
