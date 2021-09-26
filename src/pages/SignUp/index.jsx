import React, { useState } from "react";
import LoginSlider from "../../components/LoginSlider";
import * as S from './styles'
import { FcGoogle } from 'react-icons/fc'
import EmailValidator from 'email-validator'
import { Link } from 'react-router-dom'

const Login = () => {
    const [name, setName] = useState({
        name: "",
        valid: true
    })
    const [email, setEmail] = useState({
        email: "",
        valid: true
    })
    const [password, setPassword] = useState({
        password: "",
        valid: true
    })

    const onSubmit = () => {
        setName({ ...name, valid: true })
        setEmail({ ...email, valid: true })
        setPassword({ ...password, valid: true })

        let valid = true

        if(!name.name) {
            setName({ ...name, valid: false })

            valid = false
        }

        if(!EmailValidator.validate(email.email)) {
            setEmail({ ...email, valid: false })

            valid = false
        }

        if(!password.password) {
            setPassword({ ...password, valid: false })

            valid = false
        }

        if(!valid) return

        /* ...login here */
    }

    return (
        <section>
            <LoginSlider />

            <S.Container>
                <S.InvisionTitle>Invision</S.InvisionTitle>

                <S.FormContainer>
                    <S.FormTitle>Getting Started</S.FormTitle>

                    <S.Form onSubmit={onSubmit}>
                        <S.InputBox>
                            <label>Full Name</label>
                            <input value={name.name}
                                data-testid="signup-input-name"
                                onChange={e => setName({ ...name, name: e.target.value })} />
                            {!name.valid &&
                                <small>*Este campo não pode ser vazio</small>
                            }
                        </S.InputBox>
                        <S.InputBox>
                            <label>Email</label>
                            <input type="email"
                                data-testid="signup-input-email"
                                value={email.email}
                                onChange={e => setEmail({ ...email, email: e.target.value })} />
                            {!email.valid &&
                                <small>*O e-mail não é válido</small>
                            }
                        </S.InputBox>
                        <S.InputBox>
                            <label>Create Password</label>
                            <input type="password"
                                data-testid="signup-input-password"
                                value={password.password}
                                onChange={e => setPassword({ ...password, password: e.target.value })} />
                            {!password.valid &&
                                <small>*Este campo não pode ser vazio</small>
                            }
                        </S.InputBox>

                        <S.SubmitButton type="button" onClick={onSubmit}>
                            Sign Up
                        </S.SubmitButton>
                    </S.Form>

                    <S.SocialActionsBox>
                        <S.SocialActionLabel>Or</S.SocialActionLabel>

                        <S.SocialActionButton>
                            <FcGoogle size="22" />
                            Sign up with Google
                        </S.SocialActionButton>
                    </S.SocialActionsBox>

                    <S.LinkSpan>
                        By signing up, you agree to <b>Invision</b> <Link to="/signup">Terms of Conditions</Link> and  <Link to="signup">Privacy Policy</Link>
                    </S.LinkSpan>
                    <S.LinkSpan>
                        Already on <b>Invision</b>? <Link to="/">Log In</Link>
                    </S.LinkSpan>
                </S.FormContainer>
            </S.Container>
        </section>
    )
}

export default Login