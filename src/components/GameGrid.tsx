import { Fragment } from "react/jsx-runtime";
import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames, { PAGE_SIZE } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>;

    // reduce((totalCounter, single item of itteration over pages) => function to count, initial value)
    const fetchedGamesCount =
        data?.pages.reduce((total, page) => total + page.results.length, 0) ||
        0;

    console.log("fetchedGamesCount=", fetchedGamesCount);
    return (
        <Box padding="10px">
            <InfiniteScroll
                dataLength={fetchedGamesCount}
                next={() => fetchNextPage()}
                hasMore={!!hasNextPage}
                loader={
                    <>
                        <Spinner />
                        <h2>Loading...</h2>
                    </>
                }
                endMessage={<h2>You've Reached The End</h2>}
                scrollThreshold={1.0}
            >
                <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                    spacing={6}
                >
                    {isLoading &&
                        skeletons.map((skeleton) => (
                            <GameCardContainer key={skeleton}>
                                <GameCardSkeleton />
                            </GameCardContainer>
                        ))}

                    {data?.pages.map((page, index) => (
                        <Fragment key={index}>
                            {page?.results.map((game) => (
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game} />
                                </GameCardContainer>
                            ))}
                        </Fragment>
                    ))}
                </SimpleGrid>
            </InfiniteScroll>

            {/* {hasNextPage && (
                <Button
                    colorScheme="blue"
                    onClick={() => fetchNextPage()}
                    marginY={5}
                >
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </Button>
            )} */}
        </Box>
    );
};

export default GameGrid;
