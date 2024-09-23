import { useState } from "react";
import "./App.css";
import { ProductListings } from "./components/ProductListings";
import axios from "axios";
import { Starship } from "./domain/model";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { PrimaryButton } from "./components/uiComponents";

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.h1`
  font-family: "SF Distant Galaxy Long Outline Italic";
  font-size: 40px;
  color: var(--clr-white);
`;

const LoadingComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLoading = styled(CircularProgress)`
  color: var(--clr-white);
`;

const DiscoverButton = styled(PrimaryButton)`
  align-self: center;
  margin-bottom: 24px;
`;

function App() {
  const [isFetched, setIsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [starships, setStarships] = useState<Starship[]>([]);
  const [nextItemsUrl, setNextItemsUrl] = useState();
  const [noMoreStarships, setNoMoreStarships] = useState(false);

  const buttonText = isLoading ? "Discovering..." : "Discover Starships";

  const fetchStarships = () => {
    axios
      .get("https://swapi.dev/api/starships")
      .then(function (response) {
        setIsFetched(true);
        setIsLoading(false);
        setStarships(response.data.results);
        setNextItemsUrl(response.data.next);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchMoreStarships = (url?: string) => {
    if (!url) {
      setNoMoreStarships(true);
      return;
    }
    axios
      .get(url)
      .then(function (response) {
        setIsFetched(true);
        setIsLoading(false);
        setStarships(starships.concat(response.data.results));
        setNextItemsUrl(response.data.next);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleFetchStarships = () => {
    setIsLoading(true);
    fetchStarships();
  };

  const handleSeeMoreClick = () => {
    fetchMoreStarships(nextItemsUrl);
  };

  return (
    <AppWrapper>
      <Heading>CREATE YOUR FLEET</Heading>
    {!isLoading && !isFetched ? (
        <DiscoverButton onClick={() => handleFetchStarships()}>
          {buttonText}
        </DiscoverButton>
      ) : null}
      {isLoading ? (
        <LoadingComponent>
          <StyledLoading data-testid="loading" />
        </LoadingComponent>
      ) : null}
      {isFetched ? (
        <ProductListings
          starships={starships!}
          handleSeeMoreClick={handleSeeMoreClick}
          noMoreStarships={noMoreStarships}
        />
      ) : null}
    </AppWrapper>
  );
}

export default App;
