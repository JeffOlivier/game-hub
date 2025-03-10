import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
// import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
// import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`, // wider than 1024px
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={2} mb={2}>
                    <GameHeading />
                    <Flex>
                        <Box marginRight={5}>
                            <PlatformSelector />
                        </Box>
                        <SortSelector />
                    </Flex>
                </Box>
                <GameGrid />
            </GridItem>
        </Grid>
    );
}

export default App;
