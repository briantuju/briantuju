import Link from 'next/link'

import Container from '../misc/Container'

const Header = () => {
  return (
    <header className="bg-white w-full py-2 lg:py-4">
      <Container>
        <nav>
          <div>
            <Link href="/">Home</Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
