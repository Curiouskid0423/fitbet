import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';
  
const IMAGE = 'bored_ape.png'

const Card = () => {
    return (
      <Center py={12} mt={"5vh"}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'s'} textTransform={'uppercase'}>
              Your Balance
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              185 USDC
            </Heading>
            <hr />
            <Text color={'gray.400'} fontSize={'sm'} textTransform={'uppercase'}>
                Recent Transaction
            </Text>
            <Text color={'gray.600'}>
            +10 from Alex's May Workout Bet
            </Text>
          </Stack>
        </Box>
      </Center>
    );
  }

export default Card;