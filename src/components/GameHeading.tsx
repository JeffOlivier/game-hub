import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenere from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const genre = useGenere(gameQuery.genreId);

    const platform = usePlatform(gameQuery.platformId);

    const headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;

    return (
        <Heading as="h1" fontSize="5xl" marginY={5}>
            {headingText}
        </Heading>
    );
};

export default GameHeading;
