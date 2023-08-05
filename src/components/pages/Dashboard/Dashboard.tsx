import {
  Tr,
  Th,
  Td,
  Box,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Button,
  TableContainer,
} from '@chakra-ui/react'
import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

import useDashboard from './Dashboard.hooks'
import { formatCurrency } from 'utils/strings'
import { CDeleteModal, CEditModal } from './components'

const Dashboard = () => {
  const {
    data: { productList, modal, controlUpdate, errUpdate, selectedItem },
    method: {
      handleCloseModal,
      handleSubmitUpdate,
      handleCreateProduct,
      handleDeleteProduct,
      handleUpdateProduct,
      handleSubmitCreateRHF,
      handleSubmitUpdateRHF,
      handleSubmitDeleteProduct,
    },
  } = useDashboard()

  return (
    <Box>
      <Box m="0 auto" mt="4rem" maxW="120rem" bgColor="gray.100">
        <Flex>
          <Button
            p="2rem"
            ml="auto"
            color="white"
            bgColor="gray.700"
            onClick={handleCreateProduct}
            _hover={{ bgColor: 'gray.600' }}
          >
            <Text fontSize="1.6rem">Add Product</Text>
          </Button>
        </Flex>
        <TableContainer borderRadius="0.8rem" mt="2rem" boxShadow="lg">
          <Table variant="simple">
            <Thead>
              <Tr bgColor="gray.700" color="white">
                <Th p="2rem 2rem" color="inherit">
                  <Text fontSize="1.6rem"> No.</Text>
                </Th>
                <Th color="inherit">
                  <Text fontSize="1.6rem"> Product Name</Text>
                </Th>
                <Th color="inherit">
                  <Text fontSize="1.6rem"> Quantity</Text>
                </Th>
                <Th color="inherit">
                  <Text fontSize="1.6rem"> Price</Text>
                </Th>
                <Th color="inherit">
                  <Text fontSize="1.6rem"> Action</Text>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {productList?.map((product, productIdx) => (
                <Tr key={productIdx} _even={{ bgColor: 'gray.200' }}>
                  <Td p="2rem">{productIdx + 1}</Td>
                  <Td p="2rem">{product.name}</Td>
                  <Td p="2rem">{product.quantity}</Td>
                  <Td p="2rem">{`Rp${formatCurrency(product.price)}`}</Td>
                  <Td p="2rem">
                    <Flex gap={6} fontSize="2rem">
                      <Box
                        _hover={{ cursor: 'pointer' }}
                        onClick={() => handleUpdateProduct(product)}
                      >
                        <AiFillEdit />
                      </Box>
                      <Box
                        _hover={{ cursor: 'pointer' }}
                        onClick={() => handleDeleteProduct(product)}
                      >
                        <AiFillDelete />
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <CEditModal
        isEdit={modal.update}
        onClose={handleCloseModal}
        isOpen={modal.update || modal.add}
        form={{
          err: errUpdate,
          control: controlUpdate,
          onSubmitRHF: handleSubmitUpdate,
          onSubmitCreate: handleSubmitCreateRHF,
          onSubmitUpdate: handleSubmitUpdateRHF,
        }}
      />
      <CDeleteModal
        isOpen={modal.delete}
        onClose={handleCloseModal}
        itemToBeDeleted={selectedItem.name}
        onDelete={handleSubmitDeleteProduct}
      />
    </Box>
  )
}

export default Dashboard
