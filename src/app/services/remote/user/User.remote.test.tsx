import "@testing-library/react"
import { LogInData, SingUpData, UserRemoteService } from "./User.remote";
import { vi } from 'vitest'

describe("User Remote Service", () => {
  vi.mock('axios', () => {
    return {
      default: {
          post: vi.fn()
      }
  }})
  
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('must send login data after filling the form', async () => {
    const spy = vi.spyOn(UserRemoteService, "login")

    const loginData: LogInData = {
      username: "test",
      password: "test"
    }
    
    await UserRemoteService.login(loginData)

    expect(spy).toHaveBeenCalled()
  })

  it('must send signup data after filling the form', async () => {
    const spy = vi.spyOn(UserRemoteService, "signup")

    const signupData: SingUpData = {
      name: "test",
      surname: "test",
      username: "test",
      password: "test"
    }
    
    await UserRemoteService.signup(signupData)

    expect(spy).toHaveBeenCalled()
  })
})