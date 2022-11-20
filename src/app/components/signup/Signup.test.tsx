import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import Signup from "./Signup.component"
import { BrowserRouter as Router} from "react-router-dom";
import { act } from 'react-dom/test-utils';

describe("Signup Component", () => {
  it('must fill all register form and send it', async () => {
    render(<Router><Signup/></Router>)
    const nameInput = screen.getByTestId("name")
    userEvent.type(nameInput, 'testName')

    const surnameInput = screen.getByTestId("surname")
    userEvent.type(surnameInput, 'testName')

    const usernameInput = screen.getByTestId("username")
    userEvent.type(usernameInput, 'testName')

    const passwordInput = screen.getByTestId("password")
    userEvent.type(passwordInput, 'passwordTest')

    const submitButton = screen.getByRole('button', {name: /Sign up/i})

    await act(async () => {
      await fireEvent.click(submitButton);
    });
  })
})