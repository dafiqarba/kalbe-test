import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { CNav } from 'components/molecules'
import { Dashboard, Home, ProductDetail } from 'components/pages'

import 'styles/styles.css'
import { Box } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/product/:productID',
    element: <ProductDetail />,
  },
])

const App = () => {
  return (
    <Box
      display="flex"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="100%"
        maxW="192rem"
        overflow="hidden"
        position="relative"
        bgColor="gray.100"
        minH="100vh"
      >
        <CNav />
        <RouterProvider router={router} />
      </Box>
    </Box>
  )
}

export default App
