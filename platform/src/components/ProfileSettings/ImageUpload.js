import React, { useRef } from 'react'

const ImageUpload = ({ imageSource, handleChange }) => {
    const uploadedImage = useRef(null)
    const imageUploader = useRef(null)

    const onChange = async (e) => {
        const file = e.target.files?.[0]
        if (!file) {
            return
        }
        uploadedImage.current.file = file
        const reader = new FileReader()
        reader.onload = (e) => {
            uploadedImage.current.src = e.target.result
        }
        reader.readAsDataURL(file)
        handleChange(file)
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
                cursor: 'pointer',
            }}
            onClick={() => imageUploader.current.click()}
        >
            <input
                type="file"
                accept="image/*"
                onChange={onChange}
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
                <img
                    src={imageSource ?? ''}
                    alt="user_profile"
                    onLoad={(e) => (e.target.style.display = 'flex')}
                    onError={(e) => (e.target.style.display = 'none')}
                    ref={uploadedImage}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        position: 'absolute',
                        height: '60px',
                        width: '60px',
                        borderRadius: '100%',
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
