import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const useVerifyToken = () => {
    const navigate = useNavigate()
    console.log('insude verify')

    const token = localStorage.getItem('token')

    const verifyToken = useCallback(async () => {

        try {
            const { data } = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`)
            if (data) {
                return data
            } else {
                navigate('/login')
            }

        } catch (error) {
            console.log('here')
            navigate('/login')
            return null
        }

    }, [navigate, token])


    useEffect(() => {
        if (token === null) {
            navigate('/login')
        }

        verifyToken()
    }, [navigate, token, verifyToken])
}

export default useVerifyToken