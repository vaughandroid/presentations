import { EmptyPasswordError, EmptyUserNameError, getUser, InvalidCredentialsError, User, validateCredentials } from "./utils";

export async function tryLoginWithCredentials(
  username: string, 
  password: string
): Promise<User> {
  if (username.length === 0) {
    throw new EmptyUserNameError();
  }
  if (password.length === 0) {
    throw new EmptyPasswordError();
  }
  if (!validateCredentials(username, password)) {
    throw new InvalidCredentialsError();
  }

  return await getUser(username);
}