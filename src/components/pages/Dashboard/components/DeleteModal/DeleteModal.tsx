import React from 'react'
import { IDeleteModalProps } from '../../Dashboard.types'
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
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'

const DeleteModal = (props: IDeleteModalProps) => {
  const { isOpen, onClose, itemToBeDeleted, onDelete } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="48rem" p="2rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="1.6rem" fontWeight={700}>
            Delete Product
          </Text>
          <Box _hover={{ cursor: 'pointer' }} onClick={onClose}>
            <AiOutlineClose />
          </Box>
        </Flex>

        <ModalBody mt="2rem">
          <Text>Are you sure you want to delete {itemToBeDeleted}? </Text>
        </ModalBody>

        <ModalFooter mt="3.2rem">
          <Button
            mr={3}
            p="2rem"
            type="submit"
            color="white"
            fontSize="1.6rem"
            bgColor="red.600"
            onClick={onDelete}
            _hover={{ color: 'white', bgColor: 'red.400' }}
          >
            Yes
          </Button>
          <Button variant="ghost" fontSize="1.6rem" p="2rem" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DeleteModal
