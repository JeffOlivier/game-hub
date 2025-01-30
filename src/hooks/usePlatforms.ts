import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () =>
    useQuery({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
        staleTime: ms("24h"), //24 * 60 * 60 * 1000, //24 hours
        initialData: platforms,
    });

export default usePlatforms;
