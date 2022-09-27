import axiosInstances from "../configs/axiosConfig";
import axios from 'axios'

export const signUp = async (data) => {
    const formData = new FormData()
    
    const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password
    }
    formData.append('data', JSON.stringify(userInfo))

    if (data.profilePic) {
        formData.append('profilePic', data.profilePic)
    }

    const response = await axiosInstances.post('/auth/signup',
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        },
    )

    console.log(response)

}

export const signIn = (data) => {

}

export const verifyAuth =  () => {
    const token = localStorage.getItem('token')
    const provider = localStorage.getItem('provider')

    if(!token || !provider) {
        return null
    }

    if(provider==='google') {
        try {
            const { data } =  axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`)
            if (data) {
                return data
            }

        } catch (error) {
            console.log('here')
            return null
        }
    }
}