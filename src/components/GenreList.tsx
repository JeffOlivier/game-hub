// import useData from "../hooks/useData";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
// import { Genre } from "../hooks/useGenres";

const GenreList = () => {
    // const { genres } = useGenres();
    const { data: genres } = useGenres();

    return (
        <List>
            {genres.map((genre) => (
                <ListItem key={genre.id} padding="5px">
                    <HStack>
                        <Image
                            src={getCroppedImageUrl(genre.image_background)}
                            boxSize="32px"
                            borderRadius={8}
                            alt={genre.name}
                        />
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
