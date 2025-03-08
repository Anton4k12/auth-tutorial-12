import { createAuthClient } from "better-auth/react";
export const { signIn, signUp, useSession } = createAuthClient();

export const { data, error } = await authClient.signIn.email({
  email: "test@example.com",
  password: "password1234",
});
