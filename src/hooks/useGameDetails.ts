import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

// export interface GameDetails {
//     id: number;
//     name: string;
//     background_image: string;
//     released: string;
//     description_raw: string;
//     rating: number;
// }

// const apiClient = new APIClient<GameDetails>("/games");
const apiClient = new APIClient<Game>("/games");

// interface Props {
//     gameId: number;
// }

// const useGameDetails = ({ gameId }: Props) => {
//     // const gameQuery = useGameQueryStore((s) => s.gameQuery);

//     return useQuery<FetchResponse<GameDetails>, Error>({
//         queryKey: ["games", gameId],
//         queryFn: apiClient.getAll,
//         staleTime: ms("24h"), //24 * 60 * 60 * 1000, //24 hours
//         initialData: "",
//     });
// };

const useGameDetails = (slug: string) =>
    useQuery({
        queryKey: ["games", slug],
        queryFn: () => apiClient.get(slug),
    });

export default useGameDetails;
