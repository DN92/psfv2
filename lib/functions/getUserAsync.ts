import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import type { Database } from '@/lib/database.types';

export const getUserAsync = async (): Promise<null | any> => {

  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) return null;
  return session.user;
};

export default {};
