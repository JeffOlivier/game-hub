import { Link, useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

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
            <ExpandableText>{game.description_raw}</ExpandableText>
            <br />
            <br />
            <Link to="/">HOME</Link>
        </>
    );
};

export default GameDetailPage;
