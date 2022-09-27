import React, { useState, useCallback, useMemo } from 'react'
import CustomInput from '../CustomInput'
import UploadImage from '../UploadImage'
import { Stack, Divider, FormHelperText } from '@mui/material'

import PrimaryButton from '../PrimaryButton'
import TertiaryButton from '../TertiaryButton'

import { signUp, signIn } from '../../services/authService'

const LoginForm = ({ format, setFormat }) => {

    const [data, setData] = useState({})
    const [formHelper, setFormHelper] = useState(' ')
    const [confirmPassword, setConfirmPassword] = useState(true)
    const [loginLoading, setLoginLoading] = useState(false)

    const onFormSubmit = useCallback(async(e) => {
        e.preventDefault()

        if (format === 'Sign up') {
            setLoginLoading(true)
            await signUp(data)
        } else {
            signIn(data)
        }
        setLoginLoading(false)
    }, [data, format])

    const changeFormat = useCallback(() => {
        if (format === 'Sign up') {
            setFormat('Sign in')
        } else {
            setFormat('Sign up')
        }
    }, [format, setFormat])

    const onChangeValues = (e, key) => {
        setData((prevState) => ({ ...prevState, [key]: e.target.value }))

        if (key === 'password') {
            if (e.target.value === '') {
                setConfirmPassword(true)
            } else {
                setConfirmPassword(false)
            }
        }

        if (key === 'confirmPassword' && e.target.value !== '') {
            console.log('sd')
            if (e.target.value !== data.password) {
                setFormHelper('Password does not match')
            } else {
                setFormHelper('Password is in sync!')
            }
        }
    }

    const confirmPasswordHelperColor = useMemo(() => {
        if (formHelper === 'Password is in sync!') {
            return 'green'
        } else {
            return 'red'
        }
    }, [formHelper])

    const signInButton = useMemo(() => {
        if (format === 'Sign up') {
            if (confirmPasswordHelperColor === 'green') return false
            else return true
        } else {
            if (data.email && data.password) return false
            else return true
        }
    }, [data.email, data.password, format, confirmPasswordHelperColor])

    return (
        <form className='loginForm' onSubmit={onFormSubmit}>
            <Stack direction='row' spacing={5}
                divider={<Divider flexItem orientation='vertical' />}
            >
                <Stack spacing={2}
                    sx={{
                        width: "100%"
                    }}
                >
                    {format === 'Sign up' ? <CustomInput label='Name' name='name' required autoFocus value={data.name ? data.name : ''} onChange={(e) => onChangeValues(e, 'name')} /> : null}
                    <CustomInput label='E-mail' required value={data.email ? data.email : ''} onChange={(e) => onChangeValues(e, 'email')} />
                    <CustomInput label='Password' required type='password' value={data.password ? data.password : ''} onChange={(e) => onChangeValues(e, 'password')} />
                    {format === 'Sign up' ? <CustomInput label='confirmPassword' required disabled={confirmPassword} type='password' value={data.confirmPassword ? data.confirmPassword : ''} onChange={(e) => onChangeValues(e, 'confirmPassword')} /> : null}
                    <FormHelperText sx={{ color: confirmPasswordHelperColor }} >{formHelper}</FormHelperText>
                </Stack>
                {format === 'Sign up' ? <Stack
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <UploadImage setData={setData} />
                </Stack> : null}
            </Stack>
            <Stack direction={'row'} spacing={2} justifyContent='flex-end' >
                <PrimaryButton type='submit' disabled={signInButton} loading={loginLoading} >
                    {format}
                </PrimaryButton>
                <TertiaryButton onClick={changeFormat} sx={{
                    textDecoration: 'underline'
                }} >
                    {format === 'Sign up' ? 'Already have an account? Sign in..!' : "Don't have an account? Sign Up!"}
                </TertiaryButton>
            </Stack>
        </form>
    )
}

export default LoginForm