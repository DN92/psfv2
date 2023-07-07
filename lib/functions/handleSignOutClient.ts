import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export async function handleSignOut():Promise<void> {

  const supabase = createClientComponentClient<Database>();
  const { error } = await supabase.auth.signOut();
  localStorage.clear();
}
