import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

// interface Props {
//     selectedPlatform: Platform | null;
//     onSelectPlatform: (platform: Platform) => void;
// }

interface Props {
    sortOrder: string;
    onSelectOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectOrder }: Props) => {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ];

    const currentSortOrder = sortOrders.find(
        (order) => order.value === sortOrder
    );

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder?.label || "Relevance"}
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
                {sortOrders.map((order) => (
                    <MenuItem
                        key={order.value}
                        value={order.value}
                        onClick={() => onSelectOrder(order.value)}
                    >
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;