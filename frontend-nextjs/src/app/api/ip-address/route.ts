import { API_URL } from "@/config/app.config";
import axios from "axios";
import { NextApiRequest } from "next";
import { authHeader } from "../route";

export interface IpAddress {
  value: string;
  label: string;
}


export async function GET(req: NextApiRequest) {

  const response = await axios.get(`${API_URL}/ip-addresses`, await authHeader());
  
  return Response.json(response.data.data);
}

