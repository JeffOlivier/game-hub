import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        // name: PlayStation
        // slug: playstation
        android: FaAndroid,
        ios: MdPhoneIphone,
        linux: FaLinux,
        mac: FaApple,
        nintendo: SiNintendo,
        pc: FaWindows,
        playstation: FaPlaystation,
        web: BsGlobe,
        xbox: FaXbox,
    };

    console.log(platforms);
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon
                    as={iconMap[platform.slug]}
                    // key={platform.id}
                    color="gray.500"
                />
            ))}
        </HStack>
    );
};

export default PlatformIconList;