import { Link, useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
    const params = useParams();
    // const {slug} = useParams();

    // const {
    //     data,
    //     error,
    //     isLoading,
    //     // isFetchingNextPage,
    //     fetchNextPage,
    //     hasNextPage,
    //     // } = useGames(gameQuery);
    // } = useGameDetails(params.id);

    const { data: game, isLoading, error } = useGameDetails(params.slug!);

    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <Text marginBottom={10}>{game.description_raw}</Text>
            <Link to="/">HOME</Link>
        </>
    );
};

export default GameDetailPage;
