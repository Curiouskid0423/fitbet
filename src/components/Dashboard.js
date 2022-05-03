import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Grid,
  GridItem,
  Text,
  Progress,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { HamburgerIcon, CloseIcon, InfoIcon, AttachmentIcon } from '@chakra-ui/icons';
import Card from './Card';

const Links = ['Goal-Setting', 'Bettors', 'Fitness Resources'];
const options = ["Fitness goal", "Expiration date", "Amount at stake", "Challenge odds"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} px={10}>
            <Box>Dashboard</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'purple'}
              size={'sm'}
              mr={4}
              leftIcon={<InfoIcon />}>
              History
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Setting</MenuItem>
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
            <Grid h='80vh' templateRows='repeat(2, 1fr)'
            templateColumns='repeat(10, 1fr)' gap={4}>
                <GridItem rowSpan={2} colSpan={7} mt={10} ml={5}>
                    
                    <Box 
                        role={'group'}
                        p={4}
                        m={5}
                        w={'100%'}
                        h={'95%'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        zIndex={1}
                    >
                        <Grid h="100%" templateRows='repeat(6, 1fr)' templateColumns='repeat(10, 1fr)' gap={4} m={2}>
                            
                            <GridItem rowSpan={1} colSpan={6} p={5}>
                                <Text fontSize="4xl">Goal Settor Dashboard</Text>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={4} p={7}>
                                <Button colorScheme='purple' size='md'>
                                    Connect Smart Device
                                </Button>
                            </GridItem>

                            <GridItem rowSpan={4} colSpan={3}>
                                <Grid h={"100%"}>
                                    {options.map((item) => (
                                        <span>
                                            <GridItem rowSpan={1} colSpan={3} p={5}>
                                                <Text fontSize="2xl">{item}</Text>
                                            </GridItem>
                                        </span>        
                                    ))}    
                                </Grid>
                            </GridItem>

                            {/* Right column */}
                            <GridItem rowSpan={1} colSpan={7} p={2}>
                                <Text fontSize="xl" p={1}>45,000 / 100,000 steps</Text>
                                <Progress hasStripe size='lg' colorScheme={'purple'} value={50} />
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={7} p={3}>
                                <Text fontSize="xl" p={1}> Mar 10, 2021 - Mar 17, 2021 </Text>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={7} p={3}>
                                <Text fontSize="xl" p={1}> 250 USDC </Text>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={7} p={3}>
                                <Text fontSize="xl" p={1}> +3.00 Success rate </Text>
                            </GridItem>
                            {/* Share buttons */}
                            <GridItem rowSpan={1} colSpan={3} p={3}>
                                <Button
                                    w={'full'}
                                    mt={8}
                                    colorScheme={'messenger'}
                                    rounded={'md'}
                                    leftIcon={<FaFacebook />}
                                    _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}>
                                Share on Facebook
                            </Button>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={3} p={3}>
                                <Button
                                    w={'full'}
                                    mt={8}
                                    colorScheme={'twitter'}
                                    color={'white'}
                                    rounded={'md'}
                                    leftIcon={<FaTwitter />}
                                    _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}>
                                Share on Twitter
                            </Button>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={3} p={3}>
                                <Button
                                    w={'full'}
                                    mt={8}
                                    bg={useColorModeValue('#151f21', 'gray.900')}
                                    color={'white'}
                                    leftIcon={<AttachmentIcon />}
                                    rounded={'md'}
                                    _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}>
                                Copy Link
                            </Button>
                            </GridItem>

                        </Grid>
                    </Box>
                </GridItem>
                <GridItem rowSpan={2} colSpan={3}>
                    <Card/>
                </GridItem>
            </Grid>
      </Box>
    </div>
  );
}
export default Dashboard;