import React from "react";
import asyncComponent from "./components/AsyncComponent";
import NavBar from "./components/NavBar";
import "./App.css";
import theme from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import RidingRocket from "./assets/characters/RidingRocket.svg";
import Welcome from "./assets/characters/Welcome.svg";
import Avatar from "./assets/icons/Avatar.svg";
import Basketball from "./assets/icons/Basketball.svg";
import Controller from "./assets/icons/Controller.svg";
import Favorites from "./assets/icons/Favorites.svg";
import Logo from "./assets/icons/Logo.svg";
import Mail from "./assets/icons/Mail.svg";
import NewIdea from "./assets/icons/NewIdea.svg";
import ThumbsUp from "./assets/icons/ThumbsUp.svg";
import Trending from "./assets/icons/Trending.svg";
import Blammo from "./assets/Blammo.svg";
import useCachedImages from "./hooks/useCachedImages";

const AsyncHome = asyncComponent(() => import("./pages/HomePage"));
const AsyncIconList = asyncComponent(() => import("./pages/IconList"));

const images = [
  RidingRocket,
  Welcome,
  Avatar,
  Basketball,
  Controller,
  Favorites,
  Logo,
  Mail,
  NewIdea,
  ThumbsUp,
  Trending,
  Blammo,
];

function App() {
  const isLoading = useCachedImages(images);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <div style={{ paddingTop: "120px" }} />
        <Switch>
          <Route exact path="/">
            <AsyncHome />
          </Route>
          <Route path="/icon-list">
            <AsyncIconList />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
