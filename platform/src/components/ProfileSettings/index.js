import React from 'react'
// import styles from './index.module.css'
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
    // Text,
    Textarea,
    useDisclosure,
} from '@chakra-ui/react'

export default function ProfileSettings() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [setValue] = React.useState('') //add value back in
    const handleChange = (event) => setValue(event.target.value)

    return (
        <>
            <Button
                width="100%"
                fontWeight="light"
                backgroundColor="#ffff"
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
                    <ModalHeader fontFamily="var(--primary-font)">
                        Edit Your Profile
                    </ModalHeader>
                    <ModalCloseButton />
                    <ImageUpload />

                    <ModalBody pb={6}>
                        <FormControl mt={4}>
                            <FormLabel fontFamily="var(--primary-font)">
                                Name
                            </FormLabel>
                            <Input
                                // placeholder="Name..."
                                defaultValue="Katie Hawcutt"
                                fontFamily="var(--primary-font)"
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel fontFamily="var(--primary-font)">
                                Email
                            </FormLabel>
                            <Input
                                type="email"
                                // placeholder="Email..."
                                defaultValue="katiehawcutt@gmail.com"
                                fontFamily="var(--primary-font)"
                            />
                            <FormHelperText fontFamily="var(--primary-font)">
                                Your email will not be shared with 3rd parties
                            </FormHelperText>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel fontFamily="var(--primary-font)">
                                Bio
                            </FormLabel>
                            <Textarea
                                fontFamily="var(--primary-font)"
                                // value={value}
                                defaultValue="I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer."
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
