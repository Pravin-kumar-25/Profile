import React, { useState, useCallback, useRef } from 'react'
import { Typography } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';

const UploadImage = ({ setData }) => {

    const imageUpload = useRef(null)
    const uploadedImage = useRef(null)

    const onMouseEnter = useCallback((e) => {
        setViewText(true)
    }, [])

    const onMouseLeave = useCallback((e) => {
        setViewText(false)
    }, [])

    const removePicture = useCallback(() => {
        setUploadLayer('Upload your pic')
        setData((prevState) => ({ ...prevState, profilePic: null }))
        uploadedImage.current.src = '/images/profilepic.png'
    }, [setData])

    const [viewText, setViewText] = useState(false)
    const [uploadLayer, setUploadLayer] = useState('Upload your pic')

    const handleImageUpload = (e) => {
        const [file] = e.target.files
        console.log(file)
        if (file) {
            const reader = new FileReader();
            uploadedImage.current.file = file
            setData((prevState) => ({ ...prevState, profilePic: file }))
            setUploadLayer('Change pic')
            reader.onload = (e) => {
                uploadedImage.current.src = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className='file-upload'>
            <div className='cancel-button' onClick={removePicture}>
                {uploadLayer === 'Change pic' ? <CancelIcon /> : null}
            </div>
            <input type='file' placeholder='helo' accept='image/*' className='fileInput'
                ref={imageUpload}
                onChange={handleImageUpload}
            />
            <div onClick={() => imageUpload.current.click()} className='imageDiv'>
                <img src='/images/profilepic.png' alt='profilePic' ref={uploadedImage} />
                <Typography className='upload-layer' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{viewText ? uploadLayer : null}</Typography>
            </div>

        </div>
    )
}

export default UploadImage