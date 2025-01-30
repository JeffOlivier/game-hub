import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
    selectedPlatformId?: number;
    onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
    const { data, error } = usePlatforms();

    if (error) return null;

    const platform = data?.results.find((p) => p.id === selectedPlatformId);

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
                        onClick={() => onSelectPlatform(platform)}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
