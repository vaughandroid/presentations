export class EmptyUserNameError extends Error {}
export class EmptyPasswordError extends Error {}
export class InvalidCredentialsError extends Error {}

export type User = string;

export function validateCredentials(username: string, password: string): boolean {
  return Math.random() > 0.5;
}

export function getUser(username: string) {
  return `User: ${username}`;
}

export const form = {
  getUsername() { return 'user1'; },
  getPassword() { return 'password123'; },
  showEmptyUsernamePrompt() {},
  showEmptyPasswordPrompt() {},
  showInvalidCredentialsPrompt() {}
}

export const navigator = {
  showHomePageForUser(user: User) {},
}

export function handleUnexpectedError(error: any): never {
  throw error;
}