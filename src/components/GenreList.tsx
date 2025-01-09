// import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";
// import { Genre } from "../hooks/useGenres";

const GenreList = () => {
    // const { genres } = useGenres();
    const { data: genres } = useGenres();

    return (
        <ul>
            {genres.map((genre) => (
                <li>{genre.name}</li>
            ))}
        </ul>
    );
};

export default GenreList;
