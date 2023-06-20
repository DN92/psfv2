import { getUser } from '../../../../lib/functions/getUser';

export default async function UserIcon(): Promise<JSX.Element> {

  const user = await getUser();

  console.log('user from icons', user);

  const emailRoot = user?.email?.split('@')[0] ?? 'NO CURRENT SESSION';

  return (
    <div>
      {emailRoot}
    </div>
  );
}
