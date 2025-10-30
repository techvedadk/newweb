import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import bloc from '@/images/clients/bloc/logo-light.svg'
import google from '@/images/clients/google/logo-light.svg'
import riverpod from '@/images/clients/riverpod/logo-light.svg'
import etiya from '@/images/clients/etiya/logo-light.svg'
import stride from '@/images/clients/stride/logo-light.png'
import bearPeak from '@/images/clients/bearpeak/logo-light.svg'
import strapt from '@/images/clients/strapt/logo-light.svg'
import minlandsBy from '@/images/clients/minlandsby/logo-light.svg'
import sos from '@/images/clients/sos/logo-light.png'
import overlapp from '@/images/clients/overlapp/logo-light.png'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Google', google],
  ['Bloc', bloc],
  ['Riverpod', riverpod],
  ['Etiya', etiya],
  ['BearPeak', bearPeak],
  ['Strapt', strapt],
  ['MinlandsBy', minlandsBy],
  ['Stride', stride],
	['Overlapp', overlapp],
	['SOS', sos],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trusted by product teams shaping the future
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} height={80} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Designing intelligent products with measurable impact"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We blend design craft with emerging technology to deliver experiences that feel intuitive, beautiful, and unmistakably smart. Each engagement pairs rigorous discovery with rapid experimentation so products launch with confidence and purpose.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-neutral-950/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Link href={caseStudy.href} className="absolute inset-0 z-10">
                  <span className="sr-only">Read case study: {caseStudy.client}</span>
                </Link>
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    {...caseStudy.image}
                    className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent transition duration-500 group-hover:from-neutral-950/60" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                      <Image src={caseStudy.logo} alt={caseStudy.client} className="h-8 w-8" unoptimized />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{caseStudy.client}</p>
                      <p className="text-xs uppercase tracking-wide text-white/70">{caseStudy.service}</p>
                    </div>
                  </div>
                </div>
                <div className="relative z-0 flex flex-1 flex-col p-6 sm:p-8">
                  <p className="flex gap-x-2 text-sm text-neutral-500">
                    <time dateTime={caseStudy.date.split('-')[0]} className="font-semibold text-neutral-950">
                      {caseStudy.date.split('-')[0]}
                    </time>
                    <span aria-hidden="true">•</span>
                    <span>Case study</span>
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
                    {caseStudy.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base text-neutral-600">
                    {caseStudy.description}
                  </p>
                  <div className="mt-6 text-sm font-semibold text-neutral-950">
                    <span className="inline-flex items-center gap-2">
                      View project
                      <svg
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          d="m5.25 3 4.5 5-4.5 5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Capabilities() {
  return (
    <>
      <SectionIntro
        eyebrow="Capabilities"
        title="Where strategy, design, and intelligent technology converge."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our interdisciplinary teams move seamlessly from insight to implementation, combining human-centered design with AI-native engineering. We create digital experiences that feel refined, responsible, and ready to scale.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageWhiteboard}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="AI-enabled product design">
              We discover the right problems to solve and design intelligent experiences—from conversational interfaces to adaptive dashboards—that empower people without overwhelming them.
            </ListItem>
            <ListItem title="Experience & interaction design">
              Our designers craft rich, multi-sensory journeys across web, mobile, and immersive environments, balancing storytelling with measurable product outcomes.
            </ListItem>
            <ListItem title="Intelligent platforms & engineering">
              We architect flexible systems and integrate AI responsibly so your digital products remain performant, maintainable, and poised for continuous innovation.
            </ListItem>
            <ListItem title="Brand systems for tech teams">
              We define visual languages, design systems, and motion principles that keep every touchpoint cohesive from pitch decks to product UI.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function Process() {
  return (
    <>
      <SectionIntro
        eyebrow="Process"
        title="A design-led approach to building with AI."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Every engagement is collaborative, transparent, and grounded in experimentation. We align stakeholders early, iterate with real users, and ship thoughtfully orchestrated releases that evolve with your product vision.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Discover the opportunity">
            Facilitate workshops, audit data, and surface user insights to define the business challenge and the role AI should play.
          </GridListItem>
          <GridListItem title="Design the experience">
            Translate insight into concept narratives, interaction models, and high-fidelity prototypes that make the future tangible.
          </GridListItem>
          <GridListItem title="Build intelligently">
            Pair engineers and designers to implement scalable systems, integrating AI responsibly with clear guardrails and observability.
          </GridListItem>
          <GridListItem title="Launch with confidence">
            Orchestrate rollout plans, measure user impact, and capture feedback so the experience lands smoothly across every touchpoint.
          </GridListItem>
          <GridListItem title="Evolve continuously">
            Establish growth rituals—testing, analytics, and iteration loops—to keep products learning and delivering compounding value.
          </GridListItem>
        </GridList>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'TechVeda is a design-led AI studio crafting intelligent digital products, experiences, and platforms for visionary teams.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Designing intelligent digital experiences that feel human.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            TechVeda blends design thinking with AI-native engineering to imagine, prototype, and launch products that move businesses forward. From first sketch to live platform, we craft work that is beautiful, responsible, and built to scale.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Book a discovery call</Button>
            <Button href="/work" invert>
              Explore our work
            </Button>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
				client={{ name: 'Minlandsby', logo: minlandsBy }}
      >
				The team at Techveda went above and beyond with our onboarding, transtioning legacy apps to Flutter and making web apps in record time.
      </Testimonial>

      <Capabilities />

      <Process />

      <ContactSection />
    </>
  )
}
