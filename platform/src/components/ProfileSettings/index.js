import React from 'react'
import { Button, useDisclosure } from '@chakra-ui/react'

import UpdateProfile from '../UpdateProfile'

export default function ProfileSettings() {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
            <UpdateProfile isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </>
    )
}
