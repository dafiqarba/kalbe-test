import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Box, Flex, Text, useToast } from '@chakra-ui/react'

const Toast = () => {
  const toast = useToast()

  const successToast = (msg: string) => {
    toast({
      position: 'bottom-right',
      render: () => (
        <Box p="1.5rem 2.5rem" bgColor="green.500">
          <Flex gap={4} alignItems="center">
            <AiFillCheckCircle />

            <Text
              color="gray.800"
              fontWeight={600}
              fontSize="1.4rem"
              fontFamily="Inter"
            >
              {msg}
            </Text>
          </Flex>
        </Box>
      ),
    })
  }

  const errToast = (msg: string) => {
    toast({
      position: 'bottom-right',
      render: () => (
        <Box p="1.5rem 2.5rem" bgColor="red.500">
          <Flex gap={4} alignItems="center">
            <Text
              color="white"
              fontWeight={600}
              fontSize="1.4rem"
              fontFamily="Inter"
            >
              Error: {msg}
            </Text>
          </Flex>
        </Box>
      ),
    })
  }

  return { errToast, successToast }
}

export default Toast
