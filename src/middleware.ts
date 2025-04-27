import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply to /api/chat endpoint
  if (request.nextUrl.pathname === '/api/chat') {
    const apiKey = request.headers.get('x-api-key');

    // Check if API key is present and valid
    if (!apiKey || apiKey !== process.env.API_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/chat',
};
