import Link from 'next/link'

const ApplicationTittleH1 = () => {
  return (
    <div>
      <Link href='/home' className="application-title-wrapper">
        <h1 id='h1'>Planet Scottish Fold</h1>
      </Link>
    </div>
  )
}

export default ApplicationTittleH1