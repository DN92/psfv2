import { getUserAsync } from '@/lib/functions/getUserAsync';
import IframeWrapper from './_subComponents/IframeWrapper';

export default async function Home(): Promise<JSX.Element> {

  const user: any = await getUserAsync() ?? {};

  const userData = Object.entries(user).map(([key, value]: [string, any], idx: number) => (
    <p key={`${key}${idx}`}>
      <span>
        {key}
        :
        {' '}
      </span>
      <span>
        {typeof value === 'string' ? value : '{Object}'}
      </span>
    </p>
  ));

  return (
    <main>
      <IframeWrapper />
      {userData}
      {!userData && <span> no user </span>}
      {}
    </main>
  );
}
