import { API_URL } from "@/config/app.config";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
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

export async function POST(req: Request) {
  try {
    const result = await req.json();

    await axios.post(`${API_URL}/ip-addresses`, result, await authHeader());

    return new Response(JSON.stringify(result), {
      status: 201
    })
  } catch(e: any) {
    
    const errorMessage = e.response?.data?.message || 'Internal Server Error';

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: e.response?.status || 500
    });
  }
}

export async function PUT(req: Request) {
  try {
    const result = await req.json();
    
    await axios.put(`${API_URL}/ip-addresses/${result.id}`, {
      label: result.label,
      value: result.value
    }, await authHeader());

    return new Response(JSON.stringify(result), {
      status: 201
    })
  } catch(e: any) {
    
    const errorMessage = e.response?.data?.message || 'Internal Server Error';

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: e.response?.status || 500
    });
  }
}

