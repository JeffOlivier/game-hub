import { Heading } from "@chakra-ui/react";
import useGenere from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
    const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const genre = useGenere(genreId);

    const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const platform = usePlatform(platformId);

    const headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;

    return (
        <Heading as="h1" fontSize="5xl" marginY={5}>
            {headingText}
        </Heading>
    );
};

export default GameHeading;
