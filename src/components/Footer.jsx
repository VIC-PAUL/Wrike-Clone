import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import style from "./ContentHomePage.module.css"

const Footer = () => {
  return (
    <div>
         <Box
          bg={"#0c3245"}
          pt={10}
          pb={10}
        //   border={"1px solid red"}
          margin={"auto"}
          // marginTop={"200px"}
        >
          <Flex
          direction={{base:"column", md:"row"}}
          alignItems={{base:"center", md:"left"}}
          fontSize={{base:"larger",md:"large"}}
          gap={10}
            style={{
              width: "80%",
              margin: "auto",
              justifyContent: "space-between",
            }}
          >
            <Box className={style.boxFooter}
            width={{base:"100%", md:"20%"}}
            // border={"1px solid red"}

            textAlign={{base:"center",md:"left"}}
            >
              <Text color={"white"} fontWeight={"bold"} fontSize={"larger"}>
                Product
              </Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Product Tour</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Pricing</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Templates</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>App and Integration</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Task Management</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Gantt Charts</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Wrike Status</Text>
            </Box>
            <Box className={style.boxFooter} width={{base:"100%", md:"20%"}}
            // border={"1px solid red"}

            textAlign={{base:"center",md:"left"}}>
              <Text color={"white"} fontWeight={"bold"} fontSize={"larger"}>
                Solutions
              </Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>All Teams</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Marketing</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Creative</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Project Management</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Project Development</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Business Operations</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Professional Service</Text>
            </Box>
            <Box className={style.boxFooter} width={{base:"100%", md:"20%"}}
            // border={"1px solid red"}

            textAlign={{base:"center",md:"left"}}>
              <Text color={"white"} fontWeight={"bold"} fontSize={"larger"}>
                Resources
              </Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Help Center</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Community</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Webinars</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Interactive Training</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Support</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Google project management tools</Text>
              {/* <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Wrike Status</Text> */}
            </Box>
            <Box className={style.boxFooter} width={{base:"100%", md:"20%"}}
            // border={"1px solid red"}

            textAlign={{base:"center",md:"left"}}>
              <Text color={"white"} fontWeight={"bold"} fontSize={"larger"}>
              Company
              </Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>About Us</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Careers</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Our Customers</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Blog</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Events</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Newsroom</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Partner Program</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>User Conference</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Contact Us</Text>
            </Box>
            <Box className={style.boxFooter} width={{base:"100%", md:"20%"}}
            // border={"1px solid red"}

            textAlign={{base:"center",md:"left"}}>
              <Text color={"white"} fontWeight={"bold"} fontSize={"larger"}>
              Guides
              </Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Project Management Guide</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Kanban Guide</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Go-to-Market Guide</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Remote Work Guide</Text>
              {/* <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Task Management</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Gantt Charts</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"fit-content"}}>Wrike Status</Text> */}
            </Box>
          </Flex>
          {/* <hr width={"80%"} style={{margin:"auto",marginTop:"20px", color:"#04454d"}} /> */}
          <Flex
            width={"80%"}
            margin={"auto"}
            mt={"30px"}
            // border={"1px solid green"}
            borderTop={"2px solid #04454d"}
            justifyContent={"space-between"}
          >
            <Flex
              direction={{ base: "coloumn", lg: "row" }}
              gap={10}
              style={{
                width: "20%",
                margin: "auto",
                // border: "1px solid cyan",
                justifyContent: "space-around",
              }}
            >
              <Image
                h={"100%"}
                w={"40%"}
                src="https://web-static.wrike.com/tp/static/assets/img/footer/apple_en.svg"
              />
              <Image
                h={"100%"}
                w={"40%"}
                src="https://web-static.wrike.com/tp/static/assets/img/footer/google_play_en.svg"
              />
            </Flex>
            <Flex  width={"20%"} justifyContent={"space-around"} margin={"auto"}>
              <SocialIcon
                url="https://twitter.com/wrike"
                fgColor="white"
                bgColor="transparent"
                className={style.socialIcons}
                // _hover={{backgroundColor:"rgba(47, 176, 47, 0.757)"}}
              />
              <SocialIcon
                url="https://www.facebook.com/Wrike"
                fgColor="white"
                bgColor="transparent"
                className={style.socialIcons}
              />
              <SocialIcon
                url="https://www.linkedin.com/company/wrike"
                fgColor="white"
                bgColor="transparent"
                className={style.socialIcons}
              />
              <SocialIcon
                url="https://www.youtube.com/user/WrikeTeam"
                fgColor="white"
                bgColor="transparent"
                className={style.socialIcons}
              />
              <SocialIcon
                url="https://www.instagram.com/wriketeam/"
                fgColor="white"
                bgColor="transparent"
                className={style.socialIcons}
              />
            </Flex>
            <Box width={"30%"}>
              <Text color={"rgba(174, 174, 174, 0.85)"}>©2006-2022 Wrike, Inc. All rights reserved. Patented.</Text>
            </Box>
          </Flex>
        </Box>
    </div>
  )
}

export default Footer