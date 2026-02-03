// proxy which will intercept request before page loads and check for valid url
import { NextRequest, NextResponse } from 'next/server';

export default function proxy(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // if no name parameter exists, add one (my gf by default)
  if (!searchParams.has('name')) {
    const url = request.nextUrl.clone();
    url.searchParams.set('name', 'insert-name');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};