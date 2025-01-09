// import useData from "../hooks/useData";
import {
    HStack,
    List,
    ListItem,
    Image,
    Spinner,
    Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
// import { Genre } from "../hooks/useGenres";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    // const { genres } = useGenres();
    const { data: genres, isLoading, error } = useGenres();
    const sortedGenres = genres.sort((a, b) => a.name.localeCompare(b.name));

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <List>
            {sortedGenres.map((genre) => (
                <ListItem key={genre.id} padding="5px">
                    <HStack>
                        <Image
                            src={getCroppedImageUrl(genre.image_background)}
                            boxSize="32px"
                            borderRadius={8}
                            alt={genre.name}
                        />
                        <Button
                            fontSize="lg"
                            variant="link"
                            onClick={() => onSelectGenre(genre)}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
