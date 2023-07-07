import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest): Promise<NextResponse> {

  const requestUrl: URL = new URL(request.url);
  const code: string | null = requestUrl.searchParams.get('code');
  const redir: string = requestUrl.searchParams.get('redir') ?? '';

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
  }

  console.log('the code::', code);
  console.log('the redir:: ', redir);

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(`${requestUrl.origin}/${redir}`);
}
