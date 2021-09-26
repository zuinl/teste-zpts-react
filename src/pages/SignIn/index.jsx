import React, { useState } from "react";
import LoginSlider from "../../components/LoginSlider";
import * as S from './styles'
import { FcGoogle } from 'react-icons/fc'
import EmailValidator from 'email-validator'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState({
        email: "",
        valid: true
    })
    const [password, setPassword] = useState({
        password: "",
        valid: true
    })

    const onSubmit = () => {
        setEmail({ ...email, valid: true })
        setPassword({ ...password, valid: true })

        let valid = true

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
                    <S.FormTitle>Welcome to Invision</S.FormTitle>

                    <S.Form onSubmit={onSubmit}>
                        <S.InputBox>
                            <label>Email</label>
                            <input type="email"
                                data-testid="signin-input-email"
                                value={email.email}
                                onChange={e => setEmail({ ...email, email: e.target.value })} />
                            {!email.valid &&
                                <small>*O e-mail não é válido</small>
                            }
                        </S.InputBox>
                        <S.InputBox>
                            <label>Password</label>
                            <input type="password"
                                data-testid="signin-input-password"
                                value={password.password}
                                onChange={e => setPassword({ ...password, password: e.target.value })} />
                            {!password.valid &&
                                <small>*Este campo não pode ser vazio</small>
                            }
                        </S.InputBox>

                        <S.FormLink>
                            Forgot password?
                        </S.FormLink>

                        <S.SubmitButton type="button" onClick={onSubmit}>
                            Sign In
                        </S.SubmitButton>
                    </S.Form>

                    <S.SocialActionsBox>
                        <S.SocialActionLabel>Or</S.SocialActionLabel>

                        <S.SocialActionButton>
                            <FcGoogle size="22" />
                            Sign In with Google
                        </S.SocialActionButton>
                    </S.SocialActionsBox>

                    <S.LinkSpan>
                        New <b>Invision</b>? <Link to="/signup">Create Account</Link>
                    </S.LinkSpan>
                </S.FormContainer>
            </S.Container>
        </section>
    )
}

export default Login