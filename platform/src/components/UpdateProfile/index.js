import React from 'react'
import ImageUpload from '../ProfileSettings/ImageUpload'

import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Textarea,
} from '@chakra-ui/react'

import { useUserContext } from '../../contexts/User'
import useAwsUserPool from '../../hooks/useAwsUserPool'

export default function UpdateProfile({ isOpen, onClose, onOpen }) {
    const { user, setUser } = useUserContext()
    const { updateUserAttributes } = useAwsUserPool({
        user,
        setUser,
    })

    const [name, setName] = React.useState(user?.cognitoUserInfo.name)
    const [bio, setBio] = React.useState(user?.cognitoUserInfo.profile)
    const [image, setImage] = React.useState()

    return (
        isOpen && (
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontFamily="var(--primary-font)">
                        Edit Your Profile
                    </ModalHeader>
                    <ModalCloseButton />
                    <ImageUpload
                        imageSource={user?.cognitoUserInfo.picture}
                        handleChange={(file) => setImage(file)}
                    />

                    <ModalBody pb={6}>
                        <FormControl mt={4}>
                            <FormLabel fontFamily="var(--primary-font)">
                                Name
                            </FormLabel>
                            <Input
                                placeholder="Name..."
                                fontFamily="var(--primary-font)"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>
                        {/* <FormControl mt={4}>
                    <FormLabel fontFamily="var(--primary-font)">
                        Email
                    </FormLabel>
                    <Input
                        type="email"
                        placeholder="Email..."
                        fontFamily="var(--primary-font)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormHelperText fontFamily="var(--primary-font)">
                        Your email will not be shared with 3rd parties
                    </FormHelperText>
                </FormControl> */}
                        <FormControl mt={4}>
                            <FormLabel fontFamily="var(--primary-font)">
                                Bio
                            </FormLabel>
                            <Textarea
                                fontFamily="var(--primary-font)"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                overflow="auto"
                                placeholder="Bio..."
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                                updateUserAttributes({
                                    userSub: user?.cognitoUserInfo.sub,
                                    accessToken:
                                        user?.cognitoUserPool.access_token,
                                    bio,
                                    name,
                                    imageFile: image,
                                })
                                onClose()
                            }}
                        >
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        )
    )
}
