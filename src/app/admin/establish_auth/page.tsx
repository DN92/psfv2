import {getUserBE} from '@/lib/functions/getUserAsync';

type ComponentProps = {
  children: React.ReactNode
}

export default async function EstablishAuth({children}): React.ReactNode {

  const user = await getUserBE()
    
  )
}