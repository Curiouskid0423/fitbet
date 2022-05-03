import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
  
export default function Landing() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''", width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }), 
                  position: 'absolute', bottom: 1, left: 0, bg: 'purple.400', zIndex: -1,
                }}>
                FitBet
              </Text>
              <br />{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            A social betting market for personal fitness goals
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Link to="/dashboard">
                <Button
                    rounded={'full'}
                    bg={'purple.300'}
                    color={'white'}
                    _hover={{
                    bg: 'purple.600',
                    }}>
                    Log in
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'} objectFit={'cover'} src="landing_page.jpeg" 
            height={"100vh"} width={"100%"} sizes=''
          />
        </Flex>
      </Stack>
    );
  }