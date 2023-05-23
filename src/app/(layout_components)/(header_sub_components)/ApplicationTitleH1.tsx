import Link from 'next/link'

const ApplicationTittleH1 = () => {
  return (
    <Link className="application-title-wrapper" href='/home'>
      <h1 id='h1' className='h1'>Planet Scottish Fold</h1>
    </Link>
  )
}

export default ApplicationTittleH1