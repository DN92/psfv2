import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Unathenticated(): Promise<JSX.Element> {

  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    console.log('Unathenticated page recieved a user with a session:: ', session);
    console.log('redirecting');
    redirect('/');
  }

  return (
    <p> UNAUTHORIZED </p>
  );


}
