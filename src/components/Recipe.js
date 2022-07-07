import styled from "styled-components";

const RecipeCard = styled.div`
display: flex;
flex-direction: column;
padding: 30px;
width: 300px;
box-shadow: 0 3px 10px #aaa;
`;

const CoverImage = styled.img`
height: 200px;
`;

const RecipeName = styled.span`
font-size: 18px;
font-weight: bold;
color: red;
margin: 10px 0;
`;

const IngredientsText = styled.span`
font-size: 18px;
border: solid 1px red;
margin: 10px 0;
cursor: pointer;
padding: 10px 15px;
border-radius: 10px;
color: red;
text-align: center;
`;

const FullRecipeText = styled(IngredientsText)``;

export default {
    RecipeCard,
    CoverImage,
    RecipeName,
    IngredientsText,
    FullRecipeText,
}
