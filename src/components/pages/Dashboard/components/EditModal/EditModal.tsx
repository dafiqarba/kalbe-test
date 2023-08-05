import React from 'react'
import { IEditModalProps } from '../../Dashboard.types'
import {
  Box,
  Text,
  Modal,
  Button,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  Flex,
  Input,
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { Controller } from 'react-hook-form'

const EditModal = (props: IEditModalProps) => {
  const {
    isEdit,
    isOpen,
    onClose,
    form: { control, err, onSubmitRHF, onSubmitCreate, onSubmitUpdate },
  } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="48rem" p="2rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="1.6rem" fontWeight={700}>
            {isEdit ? 'Update Product' : 'Add New Product'}
          </Text>
          <Box _hover={{ cursor: 'pointer' }} onClick={onClose}>
            <AiOutlineClose />
          </Box>
        </Flex>
        <form onSubmit={onSubmitRHF(isEdit ? onSubmitUpdate : onSubmitCreate)}>
          <ModalBody mt="2rem">
            <Box>
              <Text fontSize="1.4rem">Product Name</Text>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    mt="0.8rem"
                    type="text"
                    p="1.8rem 1rem"
                    fontSize="1.6rem"
                    bgColor="gray.100"
                    isInvalid={Boolean(err.name?.message)}
                  />
                )}
              />
              {err.name && (
                <Text color="red.600" fontSize="1.2rem">
                  {err.name?.message}
                </Text>
              )}
            </Box>

            <Box mt="2rem">
              <Text fontSize="1.4rem">Quantity</Text>
              <Controller
                name="quantity"
                control={control}
                render={({ field }) => (
                  <Input
                    min={0}
                    {...field}
                    mt="0.8rem"
                    type="number"
                    p="1.8rem 1rem"
                    fontSize="1.6rem"
                    isInvalid={Boolean(err.quantity?.message)}
                  />
                )}
              />
              {err.quantity && (
                <Text color="red.600" fontSize="1.2rem">
                  {err.quantity?.message}
                </Text>
              )}
            </Box>

            <Box mt="2rem">
              <Text fontSize="1.4rem">Price</Text>
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    mt="0.8rem"
                    p="1.8rem 1rem"
                    fontSize="1.6rem"
                    isInvalid={Boolean(err.price?.message)}
                  />
                )}
              />
              {err.price && (
                <Text color="red.600" fontSize="1.2rem">
                  {err.price?.message}
                </Text>
              )}
            </Box>

            <Box mt="2rem">
              <Text fontSize="1.4rem">Image URL</Text>
              <Controller
                name="img"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    mt="0.8rem"
                    type="text"
                    p="1.8rem 1rem"
                    isInvalid={Boolean(err.img?.message)}
                    fontSize="1.6rem"
                  />
                )}
              />
              {err.img && (
                <Text color="red.600" fontSize="1.2rem">
                  {err.img?.message}
                </Text>
              )}
            </Box>
          </ModalBody>

          <ModalFooter mt="3.2rem">
            <Button
              mr={3}
              p="2rem"
              type="submit"
              color="white"
              fontSize="1.6rem"
              bgColor="gray.900"
              _hover={{ color: 'gray.900' }}
            >
              {isEdit ? 'Update' : 'Add'}
            </Button>
            <Button
              variant="ghost"
              fontSize="1.6rem"
              p="2rem"
              onClick={onClose}
            >
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default EditModal
