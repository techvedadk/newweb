import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
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
import imageLaptop from '@/images/laptop.jpg'
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
            We’ve worked with hundreds of amazing people
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
				title="We build software that delights users and drives business growth"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We leverage cutting-edge technology to unlock enterprise value and competitive advantage. Our proven expertise in AI, AR/VR, and application development helps organizations overcome complex digital challenges and achieve transformational business outcomes.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We provide comprehensive digital solutions across AI integration, augmented reality experiences, mobile applications, and web platforms. Our consultative approach ensures strategic alignment with your business objectives and maximum ROI on technology investments.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We build scalable, high-performance web applications that drive user engagement and revenue growth. Our expertise spans modern frameworks and responsive design, delivering enterprise-grade solutions tailored to your business needs.
            </ListItem>
            <ListItem title="Application development">
              We design and develop feature-rich mobile and cross-platform applications using cutting-edge technologies. Our team delivers robust solutions that enhance user experience and accelerate time-to-market for your digital initiatives.
            </ListItem>
            <ListItem title="E-commerce">
              We build sophisticated e-commerce platforms optimized for conversion and customer retention. From marketplace integrations to payment processing, we deliver end-to-end solutions that maximize your digital commerce potential.
            </ListItem>
            <ListItem title="Custom content management">
              We architect and implement flexible, scalable CMS solutions that empower your team to manage digital content efficiently. Our bespoke systems integrate seamlessly with your existing infrastructure and evolve with your business requirements.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
						Make AI work for you in 10 days.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
						We are a software development studio driving digital transformation through AI, AR/VR, mobile, and web applications. We partner with enterprises to maximize their IT investments and accelerate their digital journey.
          </p>
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

      <Services />

      <ContactSection />
    </>
  )
}
