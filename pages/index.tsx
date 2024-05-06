import Image from 'next/image'
import { NextPage } from 'next'

// import projects from '@/data/projects'
import myImage from '/public/img/me.jpg'
import Container from '@/components/misc/Container'
// import ProjectCard from '@/components/projects/ProjectCard'
// import SectionHeading from '@/components/misc/SectionHeading'
import SkillBadge, { SkillBadgeType } from '@/components/misc/SkillBadge'

const skills = ['JavaScript', 'TypeScript', 'PHP', 'Java']
const skillTheme: SkillBadgeType['theme'][] = [
  'yellow',
  'sky',
  'blue',
  'orange',
]

const Home: NextPage = () => {
  return (
    <div>
      <div className="xl:min-h-[70vh] md:bg-hero-bg dark:bg-none bg-no-repeat bg-right bg-cover">
        <Container>
          <div className="pt-6 md:pt-0 grid grid-cols-1 md:grid-cols-2 items-center min-h-[70vh] md:min-h-[400px]">
            <h1 className="font-bold text-center md:text-left self-start md:self-center text-3xl lg:text-4xl text-brand dark:text-light order-2 md:order-1 xl:leading-snug">
              A web engineer with a passion for transforming problems into
              solutions, one line of code at a time
            </h1>

            <div className="h-full overflow-hidden relative md:order-2 flex items-center justify-center">
              <Image
                src={myImage}
                alt="My Photo"
                className="object-cover rounded-3xl"
                width={250}
                height={250}
                quality={100}
              />
            </div>
          </div>
        </Container>

        <section className="skills_badge_section w-full py-12 bg-dark dark:bg-dark md:rounded-l-full text-center shadow-xl">
          <Container>
            <div className="overflow-x-auto">
              <div className="grid gap-4 grid-cols-4 items-center min-w-max">
                {skills.map((skill, index) => (
                  <SkillBadge
                    key={skill}
                    text={skill}
                    theme={skillTheme[index]}
                  />
                ))}
              </div>
            </div>
          </Container>
        </section>
      </div>

      {/* <section className="w-full py-16 md:bg-projects-bg dark:bg-none bg-no-repeat bg-right bg-cover">
        <Container>
          <SectionHeading>
            <span className="text-brand dark:text-light">My Projects</span>
          </SectionHeading>

          <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </Container>
      </section> */}
    </div>
  )
}

export default Home
