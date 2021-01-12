import React, { useState, useRef } from 'react'

const ImageUpload = () => {
    const uploadedImage = useRef(null)
    const imageUploader = useRef(null)

    const handleImageUpload = (e) => {
        const [file] = e.target.files
        if (file) {
            const reader = new FileReader()
            const { current } = uploadedImage
            current.file = file
            reader.onload = (e) => {
                current.src = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                    display: 'none',
                    border: 'none',
                }}
            />
            <div
                style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '100% !important',
                    backgroundImage: "url('./Images/userIcon.png')",
                    backgroundSize: 'cover',
                    border: 'none',
                }}
                onClick={() => imageUploader.current.click()}
            >
                <img
                    ref={uploadedImage}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'acsolute',
                    }}
                />
            </div>
            Click To Upload Image
        </div>
    )
}

export default ImageUpload
