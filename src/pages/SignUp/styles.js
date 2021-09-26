import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    order: 1;
    padding: 2rem 2rem;
    flex-wrap: wrap;

    @media (min-width: 968px) {
        order: 2;
        width: 40%;
        padding: 5rem 4rem;
    }
`

export const InvisionTitle = styled.h1`
    width: 100%;
    text-align: right;
    font-size: var(--big-text);
    color: var(--black);
    margin: 0 0 4rem 0;
`

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 2rem;
`

export const FormTitle = styled.h2`
    text-align: center;
    font-size: var(--large-text);
    color: var(--gray);
    font-weight: var(--regular-font);
    margin: 0 0 4rem 0;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 3rem;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }

    & label {
        margin-bottom: .7rem;
        color: var(--gray);
        font-size: var(--small-text);
        font-weight: var(--regular-font);
    }

    & small {
        margin-top: .4rem;
        color: var(--red);
        font-size: var(--extra-small-text);
        font-weight: var(--regular-font);
        text-align: right;
    }
`

export const FormLink = styled.span`
    text-align: right;
    width: 100%;
    font-size: var(--extra-small-text);
    color: var(--gray);
    font-weight: var(--regular-font);
    margin: 0 0 1.5rem 0;

    &:hover {
        cursor: pointer;
        opacity: .8;
        transition: .4s ease;
    }

    & a {
        color: var(--light-green);
    }
`

export const SubmitButton = styled.button`
    background: var(--gray);
    padding: .7rem 3rem;
    border-radius: 20px;
    color: var(--white);
    font-weight: var(--regular-font);
    font-size: var(--small-text);
`

export const SocialActionsBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    border-top: 1px solid var(--gray);
    padding-top: 1.5rem;
    position: relative;
`

export const SocialActionLabel = styled.div`
    position: absolute;
    top: -.5rem;
    background-color: var(--white);
    padding: 0 1rem;
    color: var(--gray);
    font-weight: var(--light-font);
`

export const SocialActionButton = styled.button`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    background-color: var(--white);
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 20px;
    padding: .5rem 2rem;

    & svg {
        margin-right: .5rem;
    }
`

export const LinkSpan = styled.span`
    text-align: center;
    width: 100%;
    font-size: var(--extra-small-text);
    color: var(--gray);
    font-weight: var(--regular-font);
    margin: 0 0 1.5rem 0;

    & a {
        color: var(--light-green);
    }

    & a:hover {
        cursor: pointer;
        opacity: .8;
        transition: .4s ease;
    }
`