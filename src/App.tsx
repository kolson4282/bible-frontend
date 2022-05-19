import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import CharacterList from "./components/CharacterList/CharacterList";
import NavBar from "./components/NavBar/NavBar";

const client = new ApolloClient({
  uri: "http://localhost:8080/query",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavBar />
      <CharacterList />
    </ApolloProvider>
  );
};

export default App;
