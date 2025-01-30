// import useData from "../hooks/useData";
import {
    HStack,
    List,
    ListItem,
    Image,
    // Spinner,
    Button,
    Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
// import { Genre } from "../hooks/useGenres";

interface Props {
    selectedGenreId?: number;
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
    // const { genres } = useGenres();
    const { data, /*isLoading,*/ error } = useGenres();
    // const { data: genres, error, isLoading } = useGenres();
    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>{error.message}</p>;
    const sortedGenres = data?.results
        ? data.results.sort((a, b) => a.name.localeCompare(b.name))
        : [];

    if (error) return null;

    // if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize="2xl" mb={3}>
                Genres
            </Heading>
            <List>
                {sortedGenres.map((genre) => (
                    <ListItem key={genre.id} padding="5px">
                        <HStack>
                            <Image
                                src={getCroppedImageUrl(genre.image_background)}
                                boxSize="32px"
                                borderRadius={8}
                                alt={genre.name}
                                objectFit={"cover"}
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontSize="lg"
                                fontWeight={
                                    genre.id === selectedGenreId
                                        ? "bold"
                                        : "normal"
                                }
                                variant="link"
                                onClick={() => onSelectGenre(genre)}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
