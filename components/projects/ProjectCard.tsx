import Link from 'next/link'
import Image from 'next/image'

import { ProjectType } from '@/data/projects'

const ProjectCard = (props: ProjectType) => {
  const { imgSrc, imgAlt, title, tech, description, url } = props

  return (
    <>
      <div className="group relative block bg-black rounded-xl">
        <Image
          alt={imgAlt}
          src={imgSrc}
          fill
          className="absolute inset-0 h-full w-full object-cover object-top opacity-50 transition-opacity group-hover:opacity-20 rounded-xl"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest bg-white text-brand w-max py-1 px-3 rounded-2xl">
            {tech}
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl mt-4">
            {title}
          </p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-white line-clamp-3">{description}</p>

              {url && (
                <Link
                  href={url}
                  className="block w-max py-1 mt-4 text-xl font-bold text-light"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Visit
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
