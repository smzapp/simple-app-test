import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const protectedRoutes = ['/'];

const excludedRoutes = ['/auth/*'];

export async function middleware(req: NextRequest) {
  
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const requestPath = req.nextUrl.pathname;

  if (protectedRoutes.some(route => requestPath === route) &&
      !excludedRoutes.some(route => requestPath.startsWith(route))) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = '/auth/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};