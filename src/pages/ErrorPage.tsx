import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);

    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Heading>Oops...</Heading>
                <Text>
                    {isRouteErrorResponse(error)
                        ? "This page does not exist"
                        : "An unexpected error has occurred."}
                </Text>
            </Box>
        </>
    );
};

export default ErrorPage;
