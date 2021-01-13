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
                    height: '65px',
                    width: '65px',
                    borderRadius: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'linear-gradient(#4a90e0, #3c9d74)',
                    border: 'none',
                }}
            >
                <div
                    style={{
                        webkitBorderRadius: '50px',
                        mozBorderRadius: '50px',
                        borderRadius: '50px',
                        border: 'none',
                        height: '60px',
                        width: '60px',
                        // backgroundImage: "url('./Images/kh.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => imageUploader.current.click()}
                >
                    <img
                        onerror={{ display: 'none' }}
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
            </div>
            Click To Upload Image
        </div>
    )
}

export default ImageUpload
