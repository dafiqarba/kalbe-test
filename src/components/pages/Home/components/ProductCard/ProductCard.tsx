import React from 'react'
import { Flex, Box, Image, useColorModeValue, Text } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { formatCurrency } from 'utils/strings'
import { IProductCardProps } from '../../Home.typs'

const ProductCard = (props: IProductCardProps) => {
  const { product } = props

  return (
    <Box
      shadow="lg"
      maxW="28rem"
      rounded="lg"
      bgColor="white"
      position="relative"
      borderWidth="0.1rem"
    >
      <Link to={`product/${product.id}`}>
        <Box w="28rem" h="20rem" overflow="hidden">
          <Image
            w="full"
            h="full"
            src={product.img}
            objectFit="contain"
            objectPosition="center"
            alt={`Picture of ${product.name}`}
          />
        </Box>
      </Link>

      <Flex direction="column" p="6" h="14rem">
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            as={Link}
            noOfLines={2}
            fontSize="1.6rem"
            lineHeight="tight"
            fontWeight={500}
            to={`product/${product.id}`}
          >
            {product.name}
          </Box>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center" mb="full">
          <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" fontSize="1.8rem" fontWeight={700} color="gray.900">
              Rp{formatCurrency(product.price)}
            </Box>
          </Box>
        </Flex>

        <Flex mt="auto">
          {product.quantity > 4 && (
            <Text
              ml="auto"
              fontWeight={800}
              fontSize="1.2rem"
              color="green.600"
            >
              Available
            </Text>
          )}
          {product.quantity <= 4 && product.quantity > 0 && (
            <Text ml="auto" fontWeight={800} fontSize="1.2rem" color="red.600">
              Limited Stock
            </Text>
          )}
          {product.quantity === 0 && (
            <Text ml="auto" fontWeight={800} fontSize="1.2rem" color="red.600">
              Not Available
            </Text>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProductCard
