import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import ApplicantRowWithLink from './_applications_subcomponents/AppRowWithLink';

export const dynamic = 'force-dynamic';

export default async function Applications():Promise<JSX.Element> {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: applications, error } = await supabase.from('application').select('*').order('id', { ascending: false });

  if (!applications) {
    return (
      <p>something went wrong in applications component</p>
    );
  }

  // console.log('the applications::', applications[0].data);
  // console.log('type', typeof applications[0].data);
  // console.log('as json:: ', JSON.parse(applications[0].data as string));

  return (
    <div>
      {applications.map(({ id, data, createdAt }) => (
        <ApplicantRowWithLink key={id} id={id} applicationData={data} createdAt={createdAt} />
      ))}
    </div>
  );

}
