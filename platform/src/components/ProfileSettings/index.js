import React from 'react'
import styles from './index.module.css'
import ImageUpload from './ImageUpload'
import {
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Textarea,
    useDisclosure,
} from '@chakra-ui/react'

export default function ProfileSettings() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)

    return (
        <>
            <Button
                width="100%"
                fontWeight="light"
                backgroundColor="#ffff"
                color="#ffff"
                borderRadius="0px"
                border="none"
                height="52px"
                _hover={{
                    color: '#3ab6d4 !important',
                }}
                onClick={onOpen}
            >
                profile settings
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Your Profile</ModalHeader>
                    <ModalCloseButton />
                    <ImageUpload />
                    {/* <img
                        className={styles.userButton}
                        src={'./Images/userIcon.png'}
                        // className={styles.userPhoto}
                        alt="user"
                    /> */}

                    <ModalBody pb={6}>
                        {/* <FormControl>
                            <FormLabel>Image</FormLabel>
                            <Input placeholder="Image url..." />
                        </FormControl> */}
                        <FormControl mt={4}>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="Name..." />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="Email..." />
                            <FormHelperText>
                                Your email will not be shared with 3rd parties
                            </FormHelperText>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Bio</FormLabel>
                            <Textarea
                                value={value}
                                onChange={handleChange}
                                overflow="auto"
                                placeholder="Bio..."
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
