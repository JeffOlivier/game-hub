import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const headingText = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

    return (
        <Heading as="h1" fontSize="5xl" marginY={5}>
            {headingText}
        </Heading>
    );
};

export default GameHeading;
