import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";

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

export async function authHeader() {
  // const session : any = await getServerSession(authOptions);

  console.log('session');
  
  return null;
  // const header = {};
  // if (session != null) {
  //   return {
  //     Authorization: 'Bearer ' + session.user?.token,
  //     Accept: 'application/json',
  //   };
  // }
  // return header;
}