// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () =>
    useQuery({
        queryKey: ["genres"],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Genre>>("/genres")
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, //24 hours
        initialData: { count: genres.length, results: genres },
    });

// params: {
//     key: "5d21884eff02426ea6539ca600cca11c",
// },
// const fetchGenres = () => {
//     axios
//         .get<Genre[]>("https://api.rawg.io/api/genres")
//         .then((res) => res.data);
// };

//     return
// };

export default useGenres;
