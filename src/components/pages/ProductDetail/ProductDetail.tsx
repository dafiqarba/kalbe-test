import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

import useProductDetail from './Product.hooks'
import { formatCurrency } from 'utils/strings'

const ProductDetail = () => {
  const {
    data: { detail },
  } = useProductDetail()

  return (
    <Box w="full">
      <Box
        p="2rem"
        maxW="120rem"
        m="4rem auto"
        boxShadow="lg"
        bgColor="white"
        borderRadius="1rem"
      >
        <Box w="full">
          <Flex as={Link} to="/" alignItems="center" gap={4}>
            <AiOutlineLeft />
            <Text fontSize="1.4rem" fontWeight={500}>
              Back
            </Text>
          </Flex>
        </Box>
        <Flex gap={10} mt="4rem">
          <Box w="36rem" h="36rem">
            <Image
              w="full"
              h="full"
              src={detail?.img}
              alt={detail?.name}
              objectFit="contain"
              objectPosition="center"
            />
          </Box>

          <Box>
            <Text fontSize="2.4rem" fontWeight={700}>
              {detail?.name}
            </Text>
            <Text mt="1rem" fontSize="2.4rem" fontWeight={700} color="red.500">
              {`Rp${formatCurrency(detail?.price || '0')}`}
            </Text>
            <Text fontSize="1.6rem" fontWeight={500}>
              {`Stock: ${detail?.quantity}`}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default ProductDetail
