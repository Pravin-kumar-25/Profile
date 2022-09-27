import React, { useState, useEffect } from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login'
import { Container, Paper, Divider, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import PrimaryButton from '../PrimaryButton';
import useStyles from './Styles'
import { gapi } from 'gapi-script'
import LoginForm from './LoginForm';

const LoginPage = ({ setLoggedIn }) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [format,setFormat] = useState('Sign up')


    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                client: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: ''
            })
        }
        gapi.load('client:auth2', initClient)
    }, [])


    const onGoogleLogin = async (res) => {
        const { name, email, imageUrl } = res.profileObj
        const user = {
            name,
            email,
            picture: imageUrl,
            provider: 'google'
        }
        console.log(res.profileObj)
        localStorage.setItem('token', res.tokenId)
        localStorage.setItem('provider', 'google')
        localStorage.setItem('user', JSON.stringify(user))
        console.log('beofre')
        navigate('/')
        console.log('after navi')
    }

    const onGoogleLoginFail = async (res) => {
        console.log(res)
    }

    return (
        <Container
            maxWidth='lg'
        // component='main'
        >
            <Paper
                className={classes.paper}
                variant='primary'
                elevation={2}
                sx={{
                    bgcolor: 'secondary.main'
                }}
            >
                <Divider variant='middle' flexItem>
                    <Typography variant='h4'>
                        {format.toUpperCase()}
                    </Typography>
                </Divider>
                <LoginForm format={format}  setFormat={setFormat} />
                <Divider variant='middle' flexItem />
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    // prompt="select_account"
                    onSuccess={onGoogleLogin}
                    onFailure={onGoogleLoginFail}
                    cookiePolicy={"single_host_origin"}
                    render={renderProps => (
                        <PrimaryButton
                            onClick={renderProps.onClick} disabled={renderProps.disabled} 
                            startIcon={<GoogleIcon />}  
                        >
                            Sign in with Google
                        </PrimaryButton>
                    )}
                />

            </Paper>
        </Container>
    )
}

export default LoginPage