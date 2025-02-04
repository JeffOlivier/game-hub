import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    // genreId: number;
    // platformId: number;
    // sortOrder: string;
    // searchText: string;

    setGenreId: (newGenreId: number) => void;
    setPlatformId: (newPlatformId: number) => void;
    setSortOrder: (newSortOrder: string) => void;
    setSearchText: (newSearchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    // genreId: 0, //initial value
    // platformId: 0,
    // sortOrder: "",
    // searchText: "",
    gameQuery: {},

    setGenreId: (newGenreId) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, genreId: newGenreId },
        })),
    setPlatformId: (platformId) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
    setSortOrder: (newSortOrder) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, sortOrder: newSortOrder },
        })),
    setSearchText: (newSearchText) =>
        set(() => ({ gameQuery: { searchText: newSearchText } })),
}));

if (process.env.NODE_ENV === "development")
    mountStoreDevtool("Games Store", useGameQueryStore);

export default useGameQueryStore;
