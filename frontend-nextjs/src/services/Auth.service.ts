interface LoginResponseType {
  expires_at: string;
  token: string;
  userData: any;
}
export const afterSignInHandler = (responseData: LoginResponseType) => {
  const { token, userData, expires_at } = responseData;

  return {
    redirect: false,
    token: token,
    userData: JSON.stringify(userData),
    expires_at: expires_at,
  };
};
