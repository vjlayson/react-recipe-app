import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchInput,
} from "./components/Header";
import {
  RecipeCard,
  CoverImage,
  RecipeName,
  IngredientsText,
  FullRecipeText,
} from "./components/Recipe";

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

const RecipeComponent = (props) => {
  // Slide In Alert Dialog
  const [open, setOpen] = React.useState(false);
  // Object Destructuring
  const { recipeObj } = props;

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          Dialog Content

          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </DialogContent>
      </Dialog>
      <RecipeCard>
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setOpen(true)}>
          Ingredients
        </IngredientsText>
        <FullRecipeText onClick={() => window.open(recipeObj.url)}>
          See Full Recipe
        </FullRecipeText>
      </RecipeCard>
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
      <Header>
        <AppNameComponent>
          <AppIcon src="/crab.svg" />
          Recipe App
        </AppNameComponent>
        <SearchComponent>
          <img src="/search-icon.svg" alt="search-icon" />
          <SearchInput placeholder="Type a recipe" onChange={onTextChange} />
        </SearchComponent>
      </Header>
      <AllRecipeContainer>
        {recipeList.length &&
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))}
      </AllRecipeContainer>
    </Container>
  );
}

export default App;
