// import useData from "../hooks/useData";
import {
    Button,
    Heading,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
// import { Genre } from "../hooks/useGenres";

// interface Props {
//     selectedGenreId?: number;
//     onSelectGenre: (genre: Genre) => void;
// }

// const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
const GenreList = () => {
    // const { genres } = useGenres();
    const { data, isLoading, error } = useGenres();
    // const { data, /*isLoading,*/ error } = useGenres();
    // const { data: genres, error, isLoading } = useGenres();

    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

    const sortedGenres = data?.results
        ? data.results.sort((a, b) => a.name.localeCompare(b.name))
        : [];

    // if (error) return <p>{error.message}</p>;
    if (error) return null;

    // if (isLoading) return <p>Loading...</p>;
    if (isLoading) return <Spinner />;

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
                                onClick={() => setSelectedGenreId(genre.id)}
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
