import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from '../index';
import { BrowserRouter } from 'react-router-dom'

const MockSignUp = () => {
    return (
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>
    )
}

describe("SignUp", () => {
    test('3 inputs has to be in the document', () => {
        render(
            <MockSignUp  />
        )

        const inputElements = screen.getAllByTestId(/signup-input/i)
        expect(inputElements.length).toBe(3); 
    });

    test('name has to change value when user types', () => {
        render(
            <MockSignUp  />
        )

        const inputElement = screen.getByTestId("signup-input-name")
        fireEvent.change(inputElement, { target: { value: "My name" } })
        expect(inputElement.value).toBe("My name");
    });

    test('email has to change value when user types', () => {
        render(
            <MockSignUp  />
        )

        const inputElement = screen.getByTestId("signup-input-email")
        fireEvent.change(inputElement, { target: { value: "myemail@email.com" } })
        expect(inputElement.value).toBe("myemail@email.com");
    });

    test('password has to change value when user types', () => {
        render(
            <MockSignUp  />
        )

        const inputElement = screen.getByTestId("signup-input-password")
        fireEvent.change(inputElement, { target: { value: "myPassw0rd" } })
        expect(inputElement.value).toBe("myPassw0rd");
    });

    test('password input has to be type "password"', () => {
        render(
            <MockSignUp  />
        )

        const inputElement = screen.getByTestId("signup-input-password")
        expect(inputElement.type).toBe("password");
    });

    test('Google Signup has to be in the document', () => {
        render(
            <MockSignUp  />
        )

        const buttonElement = screen.getByText(/Sign up with Google/i)
        expect(buttonElement).toBeInTheDocument();
    });

    test('Log In link has to be visible', () => {
        render(
            <MockSignUp  />
        )

        const linkElement = screen.getByText(/Log In/i)
        expect(linkElement).toBeVisible();
    });
})