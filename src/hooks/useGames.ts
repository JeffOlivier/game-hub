import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
// import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import Game from "../entities/Game";

export const PAGE_SIZE = 10;

const apiClient = new APIClient<Game>("/games");

// const useGames = (gameQuery: GameQuery) => {
//     return useInfiniteQuery<FetchResponse<Game>, Error>({
//         queryKey: ["games", gameQuery],
//         queryFn: ({ pageParam = 1 }) =>
//             apiClient.getAll({
//                 params: {
//                     genres: gameQuery.genreId,
//                     parent_platforms: gameQuery.platformId,
//                     ordering: gameQuery.sortOrder,
//                     search: gameQuery.searchText,
//                     page_size: PAGE_SIZE,
//                     page: pageParam /*gameQuery.page ? gameQuery.page : 1,*/,
//                 },
//             }),
//         staleTime: ms("24h"), //24 * 60 * 60 * 1000, //24 hours
//         getNextPageParam: (lastPage, allPages) => {
//             return lastPage.next ? allPages.length + 1 : undefined;
//         },
//     });
// };
const useGames = () => {
    const gameQuery = useGameQueryStore((s) => s.gameQuery);

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page_size: PAGE_SIZE,
                    page: pageParam /*gameQuery.page ? gameQuery.page : 1,*/,
                },
            }),
        staleTime: ms("24h"), //24 * 60 * 60 * 1000, //24 hours
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
    });
};

export default useGames;
