import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]/route";

export async function authHeader() {

    const session : any = await getServerSession(authOptions);
    
    return { 
      headers: {
        Authorization: 'Bearer ' + session.user?.token,
        Accept: 'application/json',
      }
     }
  }
  