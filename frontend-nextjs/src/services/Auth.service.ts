import { BASE_URL } from "@/config/app.config";

interface LoginResponseType {
  expires_at: string;
  token: string;
  userData: any;
}
  
export const afterSignInHandler = (responseData: LoginResponseType) => {
  const { token, userData, expires_at } = responseData;

  return {
    redirect: false,
    apiToken: token,
    userData: JSON.stringify(userData),
    expires_at: expires_at,
  };
};