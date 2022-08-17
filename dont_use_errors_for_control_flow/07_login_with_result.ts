import { Result } from './06_result_type';
import { getUser, User, validateCredentials } from "./utils";

export type LoginFailureReason = 
  | 'EmptyUsername' 
  | 'EmptyPassword' 
  | 'InvalidCredentials';

export async function tryLoginWithCredentials(
  username: string,
  password: string
): Promise<Result<User, LoginFailureReason>> {
  if (username.length === 0) {
    return { successful: false, reason: 'EmptyUsername' };
  }
  if (password.length === 0) {
    return { successful: false, reason: 'EmptyPassword' };
  }
  if (!validateCredentials(username, password)) {
    return { successful: false, reason: 'InvalidCredentials' };
  }

  const user = await getUser(username);
  return { successful: true, data: user };
}