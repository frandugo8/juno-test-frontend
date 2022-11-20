
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login.component';
import { BrowserRouter as Router} from "react-router-dom";

describe("LoginComponent", () => {
  it('must fill all login form and send it', async () => {
    render(<Router><Login/></Router>)
    
    const usernameLabel = screen.getByText("Username or Email")
    const usernameInput = screen.getByTestId("username")
    userEvent.click(usernameLabel)
    userEvent.type(usernameInput, 'testName')

    const passwordLabel = screen.getByText("Password")
    const passwordInput = screen.getByTestId("password")
    userEvent.click(passwordLabel)
    userEvent.type(passwordInput, 'passwordTest}')

    const submitButton = screen.getByRole('button', {name: /Log in now/i})
    await userEvent.click(submitButton)
  })
})
