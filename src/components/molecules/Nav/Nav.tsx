import React from 'react'
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  Text,
  Link,
} from '@chakra-ui/react'
import { getUserNameAlias } from 'utils/strings'

const Nav = () => {
  return (
    <Box bgColor="gray.800" p="2rem">
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Text fontWeight={800} color="white">
          KALBE Online Shop | Test Commit
        </Text>

        <Flex alignItems={'center'}>
          <Text
            as={Link}
            mr="1rem"
            href="/"
            color="white"
            fontSize="1.4rem"
            fontWeight={600}
            textDecoration="none"
          >
            Home
          </Text>
          <Text
            as={Link}
            mr="2rem"
            color="white"
            fontSize="1.4rem"
            fontWeight={600}
            href="/dashboard"
            textDecoration="none"
          >
            Dashboard
          </Text>

          <Menu>
            <MenuButton
              as={Button}
              w="4rem"
              h="4rem"
              rounded={'full'}
              variant={'link'}
              borderRadius="50%"
              bgColor="gray.200"
              cursor={'pointer'}
            >
              <Text fontSize="1.8rem" fontWeight={800}>
                {getUserNameAlias('Test User')}
              </Text>
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Nav
