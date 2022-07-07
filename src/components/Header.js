import styled from "styled-components";

const HeaderContainer = styled.div`
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

const SearchInput = styled.input`
border: none;
outline: none;
font-size: 30px;
width: 70%;
`;

export default {
    HeaderContainer,
    AppNameComponent,
    AppIcon,
    SearchComponent,
    SearchInput,
};
