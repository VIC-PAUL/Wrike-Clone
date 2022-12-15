import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import style from "./ContentHomePage.module.css";

const ContentHomePage = () => {
  return (
    <div>
      <Stack width={"100%"}>
        <Box
          className={style.firstBox}
          display={{ base: "inline", lg: "flex" }}
          paddingLeft={{ base: "15%", lg: "5%", xl: "8%" }}
          paddingTop={{ base: "20px", lg: "30px" }}
          paddingRight={{ base: "15%", lg: "5%", xl: "8%" }}
          textAlign={{ base: "center", lg: "left" }}
          // border={"1px solid red"}
        >
          <Box
            className={style.firstFBox}
            width={{ base: "100%", lg: "40%" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Text
              as={"h1"}
              fontSize={{ base: "30px", md: "40px", lg: "55px" }}
              fontWeight={{ base: "semibold", lg: "bold" }}
              marginBottom={{ base: "10px", lg: "20px" }}
              textAlign={"center"}
            >
              Remove barriers, find clarity, exceed goals
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              marginBottom={"20px"}
              fontWeight={"semibold"}
            >
              Anything is possible with the most powerful work management
              software at your fingertips.
            </Text>
            <Box
              display={{base:"inline",lg:"flex"}}
              width={{base:"100%"}}
              justifyContent={"space-around"}
              // border={"1px solid red"}
            >
              <Input
                placeholder="Enter Your Business Email"
                bg={"white"}
                width={{base:"100%",lg:"60%"}}
                height={{ base: "60px", lg: "50px" }}

              />
              <Button
              height={{ base: "60px", lg: "50px" }}
              bg={"rgb(34 197 94)"}
              _hover={{ bg: "rgba(34,197,94,0.8)" }}
              width={{ base: "100%", lg: "30%" }}
              >Get Started</Button>
            </Box>
          </Box>
          <Box>hi</Box>
        </Box>
      </Stack>
    </div>
  );
};

export default ContentHomePage;
