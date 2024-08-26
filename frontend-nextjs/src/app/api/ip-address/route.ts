import { API_URL } from "@/config/app.config";
import axios from "axios";
import { NextApiRequest } from "next";
import { authHeader } from "../route";
import { error } from "console";
import { NextResponse } from "next/server";

export interface IpAddress {
  value: string;
  label: string;
}


export async function GET(req: NextApiRequest) {

  const response = await axios.get(`${API_URL}/ip-addresses`, await authHeader());
  
  return Response.json(response.data.data);
}

export async function POST(req: NextApiRequest) {

  try {
    console.log(req.body);
    
    const response = await axios.post(`${API_URL}/ip-addresses`, req.body, await authHeader());
    
    return Response.json({message: 'Successfully added new record' });
  } catch(e) {
    return NextResponse.json({ error: e }, { status: 500 })
  }
}

