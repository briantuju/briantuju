import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import { Size, useWindowSize } from '@/hooks/useWindowSize'
import logoCropped from '@/public/img/logo-cropped.png'
import IconMenuLeft from '../icons/IconMenuLeft'
import { maxMobileWidth } from '@/utils'
import Container from '../misc/Container'
import Button from '../button/Button'
import { Icon } from '../misc/Icon'

const Navigation = () => {
  const size: Size = useWindowSize()
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

  const toggleMobileNav = () => setShowMobileNav(!showMobileNav)

  const isMobile = size.width ? size.width <= maxMobileWidth : false

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
                className={`absolute md:relative left-0 top-12 md:top-0 w-full md:w-auto bg-white py-4 md:py-0 block`}
              >
                <div className="bt_container md:max-w-none">
                  <ul className="flex flex-col md:flex-row gap-4 xl:gap-8 items-start md:items-center justify-start font-bold text-xl text-brand-dark">
                    {/* Logo */}
                    <Link
                      href={'/'}
                      className="absolute md:relative -top-11 md:top-0 left-20 md:left-0"
                    >
                      <Image
                        src={logoCropped}
                        alt="Brian Tuju logo"
                        className="object-cover rounded-lg"
                        width={36}
                        height={36}
                      />
                    </Link>
                    {/* Links */}
                    <li>
                      <Link href={'/about'}>About Me</Link>
                    </li>
                    <li>
                      <Link href={'/projects'}>Projects</Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}

            {/* CTA Button */}
            <Button className="bt_btn--sm rounded-full">Contact Me</Button>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navigation
