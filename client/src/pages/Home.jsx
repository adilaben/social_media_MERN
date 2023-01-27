import { Box, useMediaQuery } from "@mui/material";
import { Navbar } from "components";
import { Advert, FriendList, MyPost, Posts, User } from "components/widgets";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:915px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6% 0 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box
          position={isNonMobileScreens ? "sticky" : undefined}
          height={isNonMobileScreens ? "80vh" : undefined}
          top={isNonMobileScreens ? "15vh" : undefined}
          flexBasis={isNonMobileScreens ? "26%" : undefined}
        >
          <User userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPost picturePath={picturePath} />
          <Posts userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%" position="sticky" height="80vh" top="15vh">
            <Advert />
            <Box m="2rem 0" />
            <FriendList userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
