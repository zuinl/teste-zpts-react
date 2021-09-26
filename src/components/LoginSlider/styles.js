import styled from 'styled-components'

export const LoginSliderContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: var(--light-green);
    padding: 3rem 2rem;
    order: 2;

    @media(min-width: 968px) {
        order: 1;
        width: 60%;
        height: 100vh;
        padding: 8rem 3rem;
    }
`

export const SliderImage = styled.img`
    width: 280px;

    @media (min-width: 698px) and (max-width: 968px) {
        width: 350px;
    }

    @media (min-width: 968px) {
        width: 470px;
    }
`

export const SliderTextContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    & h1 {
        color: var(--white);
        font-weight: var(--regular-font);
        font-size: var(--big-text);
        margin: 0 0 1.5rem 0;
        text-align: center;
    }

    & h2 {
        color: var(--white);
        font-weight: var(--regular-font);
        font-size: var(--medium-text);
        margin: 0 0 1.5rem 0;
        text-align: center;
        margin: 0 0 0 0;
    }
`

export const SliderItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    margin-top: 2rem;
`

export const SliderItem = styled.span`
    width: ${props => props.active ? '24' : '12'}px;
    height: 12px;
    border-radius: 6px;
    margin-right: .5rem;
    background: ${props => props.active ? 'var(--white)' : 'var(--white-transparency)'};

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        opacity: .8;
        cursor: pointer;
        transition: .4s ease;
    }
`