import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const getUserBE = async (): Promise<null | ExtendedUser> => {

  const supabase = createServerComponentClient<Database>( { cookies } );
  const { data: { session } } = await supabase.auth.getSession();

  if ( !session || !session.user ) return null;

  const { data: permissions, error } = await supabase.from( 'user_permissions' ).select( 'id, level' ).match( { id: session.user.id } ).single();

  if ( permissions ) {
    const extendedUser: ExtendedUser = { ...session.user, permissions: permissions?.level ?? '' };
    return extendedUser;
  }
  return null;
};
