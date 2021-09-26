import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --big-text: 2rem;
        --large-text: 1.7rem;
        --medium-text: 1.2rem;
        --small-text: 1rem;
        --extra-small-text: .8rem;

        --bold-font: 700;
        --regular-font: 500;
        --light-font: 300;

        --white: #FFF;
        --white-transparency: rgb(255, 255, 255, .5);
        --black: #000;
        --gray: #707070;
        --light-green: #A9C5BA;
        --red: #ff7369;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Muli;
    }

    section {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100vw;
        height: 100vh;
        flex-wrap: wrap;
        overflow-x: hidden;
        overflow-y: auto;
    }

    input {
        outline: none;
        border: 0px;
        border-bottom: 1px solid var(--gray);
        padding: .4rem .7rem .4rem .7rem;
        color: var(--black);
        font-weight: var(--regular-font);
        font-size: var(--small-text);
    }

    input::placeholder {
        font-weight: var(--light-font);
    }

    button {
        outline: none;
        border: 0px;
    }

    button:hover {
        cursor: pointer;
        opacity: .8;
        transition: .4s ease;
    }
`