import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

// interface Props {
//     selectedPlatform: Platform | null;
//     onSelectPlatform: (platform: Platform) => void;
// }

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {/* {selectedPlatform?.name || "Platforms"} */}
                Order by: Relevance
            </MenuButton>
            <MenuList>
                {/* {sortedPlatforms.map((platform) => (
                        <MenuItem
                            key={platform.id}
                            onClick={() => onSelectPlatform(platform)}
                        >
                            {platform.name}
                        </MenuItem>
                    ))} */}
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average rating</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
