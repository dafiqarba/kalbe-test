import React from 'react'
import { Flex } from '@chakra-ui/react'

import useHome from './Home.hooks'
import { CProductCard } from './components'

const Home = () => {
  const {
    data: { productList },
  } = useHome()

  return (
    <Flex
      gap="1rem"
      m="4rem auto"
      maxW="120rem"
      flexWrap="wrap"
      alignItems="stretch"
    >
      {productList?.map((product, productIdx) => (
        <CProductCard key={productIdx} product={product} />
      ))}
    </Flex>
  )
}

export default Home
