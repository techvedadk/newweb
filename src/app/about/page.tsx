import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our principles"
        title="Design with empathy, build with intelligence."
        invert
      >
        <p>
          We’re a studio of designers, strategists, and technologists who chase meaningful outcomes for real people.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Curiosity first" invert>
            We run on workshops, whiteboards, and research. Every engagement starts by asking better questions so we can design experiences users actually want.
          </GridListItem>
          <GridListItem title="Radical clarity" invert>
            We share prototypes early, communicate openly, and align on measurable outcomes. Transparency keeps teams moving quickly without losing trust.
          </GridListItem>
          <GridListItem title="Responsible innovation" invert>
            AI should feel empowering, not overwhelming. We build with ethics, accessibility, and longevity in mind so intelligence always serves the people using it.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Shrihari P',
        role: 'Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet TechVeda—a design-led AI studio crafting intelligent experiences with empathy, rigor, and responsible innovation.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro
        eyebrow="About us"
        title="We design intelligent products that feel distinctly human."
      >
        <p>
          TechVeda is a Copenhagen-based product studio where design craft and AI engineering come together to shape what’s next.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We founded TechVeda to bridge a gap we kept seeing: products were getting smarter, but the experiences around them weren’t keeping pace. Our studio pairs service designers, UX storytellers, and machine learning engineers so strategy, craft, and technology move in lockstep.
          </p>
          <p>
            Every partnership starts with people—your team, your customers, your wild ideas. We co-create through workshops, rapid prototyping, and AI experimentation to uncover the signal from the noise. The outcome is always a product story grounded in insight, designed with empathy, and engineered to evolve.
          </p>
          <p>
            From early-stage startups to global innovators, our clients partner with us to launch intelligent interfaces, platforms, and immersive experiences that are not only performant, but memorable. It’s design with ambition, powered by responsible intelligence.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
					<StatListItem value="30+" label="Intelligent products launched" />
					<StatListItem value="12" label="Industries reimagined with AI" />
					<StatListItem value="4" label="Global collaboration hubs" />
					<StatListItem value="82%" label="Concepts that ship to market" />
        </StatList>
      </Container>

      <Culture />

			{/* <Team /> */}

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Essays and experiments on designing with intelligence—from prototyping conversational interfaces to crafting responsible AI playbooks."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
