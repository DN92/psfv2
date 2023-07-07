import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import ApplicantRowWithLink from './_applications_subcomponents/AppRowWithLink';

export const dynamic = 'force-dynamic';

export default async function Applications():Promise<JSX.Element> {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: applications, error } = await supabase.from('applications').select('*');

  if (!applications) {
    return (
      <p>something went wrong in applications component</p>
    );
  }

  console.log('the applications::', applications);

  return (
    <div>
      ph
    </div>
  );

}
