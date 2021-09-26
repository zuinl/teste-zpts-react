import { render, screen, fireEvent } from '@testing-library/react';
import SignIn from '../index';
import { BrowserRouter } from 'react-router-dom'

const MockSignIn = () => {
    return (
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    )
}

describe("SignIn", () => {
    test('2 inputs has to be in the document', () => {
        render(
            <MockSignIn  />
        )

        const inputElements = screen.getAllByTestId(/signin-input/i)
        expect(inputElements.length).toBe(2);
    });

    test('email has to change value when user types', () => {
        render(
            <MockSignIn  />
        )

        const inputElement = screen.getByTestId("signin-input-email")
        fireEvent.change(inputElement, { target: { value: "myemail@email.com" } })
        expect(inputElement.value).toBe("myemail@email.com");
    });

    test('password has to change value when user types', () => {
        render(
            <MockSignIn  />
        )

        const inputElement = screen.getByTestId("signin-input-password")
        fireEvent.change(inputElement, { target: { value: "myPassw0rd" } })
        expect(inputElement.value).toBe("myPassw0rd");
    });

    test('password input has to be type "password"', () => {
        render(
            <MockSignIn  />
        )

        const inputElement = screen.getByTestId("signin-input-password")
        expect(inputElement.type).toBe("password");
    });

    test('Google Signin has to be in the document', () => {
        render(
            <MockSignIn  />
        )

        const buttonElement = screen.getByText(/Sign In with Google/i)
        expect(buttonElement).toBeInTheDocument();
    });

    test('Create Account link has to be visible', () => {
        render(
            <MockSignIn  />
        )

        const linkElement = screen.getByText(/Create Account/i)
        expect(linkElement).toBeVisible();
    });
})