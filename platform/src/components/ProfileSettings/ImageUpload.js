import React, { useRef } from 'react'

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
                fontFamily: 'var(--primary-font)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px',
            }}
        >
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                    display: 'none',
                }}
            />
            <div
                style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '100% !important',
                    backgroundImage: "url('./Images/userIcon.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                onClick={() => imageUploader.current.click()}
            >
                <img
                    alt="user"
                    ref={uploadedImage}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        position: 'absolute',
                        height: '60px',
                        width: '60px',
                        borderRadius: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'none',
                        backgroundPosition: 'center',
                    }}
                />
            </div>
            Click To Upload Image
        </div>
    )
}

export default ImageUpload
