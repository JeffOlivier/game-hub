import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
    const params = useParams();
    // const {slug} = useParams();

    const { data: game, isLoading, error } = useGameDetails(params.slug!);

    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                <GridItem>
                    <ExpandableText>{game.description_raw}</ExpandableText>
                    <GameAttributes game={game} />
                </GridItem>
                <GridItem>
                    <GameTrailer gameId={game.id} />
                    <br />
                    <GameScreenshots gameId={game.id} />
                </GridItem>
            </SimpleGrid>
        </>
    );
};

export default GameDetailPage;
