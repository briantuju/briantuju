export type ProjectType = {
  id: number
  imgSrc: string
  imgAlt: string
  tech: string
  title: string
  description: string
  url?: string
}

const projects: ProjectType[] = [
  {
    id: 1,
    imgSrc: '/img/projects/topviewcreators.png',
    imgAlt: 'Topview Creators',
    title: 'Topview Creators',
    url: 'https://topviewcreators.com',
    tech: 'Website',
    description:
      "Topview Creators is a website that provides high-quality content writing services. It's made up of a team of wiki experts, grant consultants and content creation specialists.",
  },
  {
    id: 2,
    imgSrc: '/img/projects/wikipagescreator.png',
    imgAlt: 'Wikipages Creator',
    title: 'Wikipages Creator',
    url: 'https://wikipagescreator.com',
    tech: 'Website',
    description:
      "Wikipages Creator is the best wikipedia page creation agency. Whether you're looking to start with an agency or personal brand, Wikipages Creator will help you unlock the potential of your brand with a wikipedia page.",
  },
  {
    id: 3,
    imgSrc: '/img/projects/publishwikipages.png',
    imgAlt: 'Publish Wikipages',
    title: 'Publish Wikipages',
    url: 'https://www.publishwikipages.com',
    tech: 'Website',
    description:
      'Publishwikipages provides extensive Wikipedia services such as creating, writing, updating, and managing wikipedia pages',
  },
]

export default projects
