import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    let color = score > 80 ? "green" : score > 60 ? "yellow" : "red";

    return (
        <Badge
            colorScheme={color}
            fontSize="14px"
            paddingX={2}
            borderRadius={4}
        >
            {score}
        </Badge>
    );
};

export default CriticScore;
