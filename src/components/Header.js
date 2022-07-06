import styled from "styled-components";

export const Header = styled.div`
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

export const AppNameComponent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const AppIcon = styled.img`
width: 60px;
height: 60px;
margin: 15px;
`;

export const SearchComponent = styled.div`
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
border-radius: 6px;
width: 50%;
`;

export const SearchInput = styled.input`
border: none;
outline: none;
font-size: 30px;
width: 70%;
`;