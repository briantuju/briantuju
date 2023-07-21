import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Container from '../misc/Container'
import ThemeToggle from '../misc/ThemeToggle'
import IconMenuLeft from '../icons/IconMenuLeft'
import logoCropped from '@/public/img/logo-cropped.png'
import { Icon } from '../misc/Icon'
import { maxMobileWidth } from '@/utils'
import { Size, useWindowSize } from '@/hooks/useWindowSize'

const Navigation = () => {
  const router = useRouter()
  const size: Size = useWindowSize()
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

  const toggleMobileNav = () => setShowMobileNav(!showMobileNav)

  const isMobile = size.width ? size.width <= maxMobileWidth : false

  useEffect(() => {
    /*
     * When the route changes, we need to toggle the visibility
     * of the mobile menu
     */
    const handleRouteChange = () => setShowMobileNav(false)

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <div className="relative">
      <Container>
        <nav>
          <div className="flex items-center justify-between">
            {/* Mobile Menu Toggle */}
            <Icon
              className="bt_color-brand cursor-pointer hover:text-brand-dark md:hidden"
              icon={IconMenuLeft}
              size={36}
              onClick={toggleMobileNav}
            />

            {/* Navigation Items */}
            {showMobileNav || !isMobile ? (
              <div
                className={`absolute md:relative left-0 top-12 md:top-0 w-full md:w-auto py-4 md:py-0 block z-10`}
              >
                <div className="bt_container md:max-w-none">
                  <ul className="flex flex-col md:flex-row gap-4 xl:gap-8 items-start md:items-center justify-start font-bold text-xl text-brand-dark dark:text-brand-light">
                    {/* Logo */}
                    <Link
                      href={'/'}
                      className="md:relative -top-11 md:top-0 left-20 md:left-0"
                    >
                      <Image
                        src={logoCropped}
                        alt="Brian Tuju logo"
                        className="object-cover rounded-lg"
                        width={60}
                        height={60}
                      />
                    </Link>

                    {/* Links */}
                    {/* <li>
                      <Link href={'/profile'}>Profile</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            ) : null}

            <div className="flex gap-8 items-center">
              {/* CTA Button */}
              <Link href="/contact" className="bt_btn bt_btn--sm rounded-full">
                Contact Me
              </Link>

              {/* Theme toggle */}
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navigation
