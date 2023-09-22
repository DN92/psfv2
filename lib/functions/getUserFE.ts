'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Dispatch } from 'react';

// TODO: currently, this method both sets the user to state via the passing in setter, and also returns the same user. I am aware this breaks best practices and should be changed later when i have a better idea about the flow of the frontend code.

export async function getUserFE( setterFunction?:Dispatch<ExtendedUser> ): Promise<null | ExtendedUser> {
  const supabase = createClientComponentClient<Database>();
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();

  console.log( 'the session' );
  if ( !session || !session.user ) return null;

  const { data: permissions, error } = await supabase.from( 'user_permissions' ).select( 'id, level' ).match( { id: session.user.id } ).single();

  if ( permissions ) {
    const extendedUser: ExtendedUser = { ...session.user, permissions: permissions.level ?? '' };
    return extendedUser;
  }
  return null;
}
