import { tryLoginWithCredentials } from './02_login_with_errors';
import { EmptyPasswordError, EmptyUserNameError, form, InvalidCredentialsError, navigator, handleUnexpectedError } from "./utils";

async function attemptLogin() {
  const username = form.getUsername();
  const password = form.getPassword();

  try {
    const user = await tryLoginWithCredentials(username, password);
    navigator.showHomePageForUser(user);
  } catch (error: unknown) {
    if (error instanceof EmptyUserNameError) {
      form.showEmptyUsernamePrompt();
    } else if (error instanceof EmptyPasswordError) {
      form.showEmptyPasswordPrompt();
    } else if (error instanceof InvalidCredentialsError) {
      form.showInvalidCredentialsPrompt();
    } else {
      handleUnexpectedError(error); // Could e.g. log & crash
    }
  }
}