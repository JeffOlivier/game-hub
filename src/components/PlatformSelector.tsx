import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms /*, { Platform }*/ from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

// interface Props {
//     selectedPlatformId?: number;
//     onSelectPlatform: (platform: Platform) => void;
// }

const PlatformSelector =
    (/*{ selectedPlatformId, onSelectPlatform }: Props*/) => {
        const { data, error } = usePlatforms();
        const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

        if (error) return null;

        const selectedPlatformId = useGameQueryStore(
            (s) => s.gameQuery.platformId
        );
        const platform = usePlatform(selectedPlatformId);

        const sortedPlatforms = data?.results
            ? data.results.sort((a, b) => a.name.localeCompare(b.name))
            : [];

        return (
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    {platform?.name || "Platforms"}
                </MenuButton>
                <MenuList>
                    {sortedPlatforms.map((platform) => (
                        <MenuItem
                            key={platform.id}
                            onClick={() => setSelectedPlatformId(platform.id)}
                        >
                            {platform.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        );
    };

export default PlatformSelector;
