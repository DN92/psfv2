import { redirect } from 'next/navigation';
import { getUserBE } from '@/lib/functions/getUserBE';

type LayoutProps = {
  children: React.ReactNode;
};

export default async function AdminLayout({ children }: LayoutProps): Promise<React.ReactNode> {
  const user = await getUserBE();
  const hasPermission = (user?.permissions === 'ADMIN');
  if (!hasPermission) {
    redirect('/unauthorized');
  }

  return (
    <div>
      {
        hasPermission ?
          children
          :
          <p>access denied</p>
      }
    </div>
  );
}
