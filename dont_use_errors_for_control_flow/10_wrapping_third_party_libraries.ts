import { tryLoginWithCredentials } from './02_login_with_errors';
import { Result } from './06_result_type';
import { LoginFailureReason } from './07_login_with_result';
import { EmptyPasswordError, EmptyUserNameError, InvalidCredentialsError, User, handleUnexpectedError } from "./utils";

async function tryLoginWithCredentialsWrapper(
  username: string,
  password: string
): Promise<Result<User, LoginFailureReason>> {
  try {
    const user = await tryLoginWithCredentials(username, password);
    return { successful: true, data: user };
  } catch (error: unknown) {
    if (error instanceof EmptyUserNameError) {
      return { successful: false, reason: 'EmptyUsername' };
    } else if (error instanceof EmptyPasswordError) {
      return { successful: false, reason: 'EmptyPassword' };
    } else if (error instanceof InvalidCredentialsError) {
      return { successful: false, reason: 'EmptyUsername' };
    } else {
      handleUnexpectedError(error); // Could e.g. log & crash
    }
  }
}