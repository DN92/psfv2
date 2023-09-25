import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import UserRow from './_subcomponents/UserRow';

export const dynamic = 'force-dynamic';

export default async function ViewUsers(): Promise<JSX.Element> {

  const supabase = createServerComponentClient<Database>( { cookies } );
  const { data: users, error } = await supabase.from( 'user_questionaire' ).select( '*' ).order( 'id', { ascending: false } );

  if ( !users ) {
    return (
      <p>something went wrong in view users component</p>
    );
  }

  const sortedData: Array<UserQ> = [...users.sort( ( a, b ) => {
    if ( a.approved === false && b.approved === true ) {
      return -1;
    } if ( a.approved === true && b.approved === false ) {
      return 1;
    }
    return 0;
  } )];

  return (
    <div>
      { sortedData.map( ( user ) => (
        <UserRow
          key={ user.id }
          user={ user }
        />
      ) ) }
    </div>
  );
}
