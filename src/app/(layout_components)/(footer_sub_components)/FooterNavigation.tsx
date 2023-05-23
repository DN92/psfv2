import Link from 'next/link'

const Footernavigation = () => {
  return (
    <nav className="footer-nav">
      <Link href='/waitingListForm' >Apply</Link>
      <Link href='/availableKittens'>Kittens</Link>
      <Link href='/contact'>Contact</Link>
    </nav>
  )
}

export default Footernavigation