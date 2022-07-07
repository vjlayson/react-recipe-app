import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from '@mui/material/DialogActions';
import Header from "./components/Header";
import Recipe from "./components/Recipe";

const APP_ID = "131a132a";
const APP_KEY = "fc1d6869c9394cae1122b83b9cf471d2";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AllRecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
`;

const Placeholder = styled.img`
width: 300px;
height: 300px;
`;

const RecipeComponent = (props) => {
  // Slide In Alert Dialog
  const [open, setOpen] = React.useState(false);
  // Object Destructuring
  const { recipeObj } = props;

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                <td>{ingredientObj.text}</td>
                <td>{ingredientObj.weight}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Recipe.IngredientsText onClick={() => window.open(recipeObj.url)}>See More</Recipe.IngredientsText>
          <Recipe.FullRecipeText onClick={() => setOpen(false)}>Close</Recipe.FullRecipeText>
        </DialogActions>
      </Dialog>
      <Recipe.RecipeCard>
        <Recipe.CoverImage src={recipeObj.image} />
        <Recipe.RecipeName>{recipeObj.label}</Recipe.RecipeName>
        <Recipe.IngredientsText onClick={() => setOpen(true)}>
          Ingredients
        </Recipe.IngredientsText>
        <Recipe.FullRecipeText onClick={() => window.open(recipeObj.url)}>
          See Full Recipe
        </Recipe.FullRecipeText>
      </Recipe.RecipeCard>
    </>
  );
};

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  // API Integration
  const getRecipe = async (searchString) => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    // Debouncing Concept
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => getRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header.HeaderContainer>
        <Header.AppNameComponent>
          <Header.AppIcon src="/crab.svg" />
          Recipe App
        </Header.AppNameComponent>
        <Header.SearchComponent>
          <img src="/search-icon.svg" alt="search-icon" />
          <Header.SearchInput placeholder="Type a recipe" onChange={onTextChange} />
        </Header.SearchComponent>
      </Header.HeaderContainer>
      <AllRecipeContainer>
        {recipeList.length ? 
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          )): <Placeholder src="welcome.svg" />}
      </AllRecipeContainer>
    </Container>
  );
}

export default App;
