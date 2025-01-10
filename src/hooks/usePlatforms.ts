// import useData from "./useData";
// import { Platform } from "./useGames";
import platforms from "../data/platforms";

// export interface Platforms {
//     id: number;
//     name: string;
//     slug: string;
// }

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
