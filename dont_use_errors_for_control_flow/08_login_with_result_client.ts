import { tryLoginWithCredentials } from './07_login_with_result';
import { form, navigator } from "./utils";

async function attemptLogin() {
  const username = form.getUsername();
  const password = form.getPassword();

  const result = await tryLoginWithCredentials(username, password);
  if (result.successful) {
    const user = result.data;
    navigator.showHomePageForUser(user);
  } else {
    switch (result.reason) {
      case 'EmptyUsername':
        form.showEmptyUsernamePrompt();
        break;
      case 'EmptyPassword':
        form.showEmptyPasswordPrompt();
        break;
      case 'InvalidCredentials':
        form.showInvalidCredentialsPrompt();
        break;
      default:
        assertNever(result.reason);
    }
  }
}

function assertNever(x: never): never {
  throw Error(`Never case reached with unexpected value: ${x}`);
}