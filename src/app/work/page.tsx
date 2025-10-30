import { type Metadata } from 'next'
import Image from 'next/image'
import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import bloc from '@/images/clients/bloc/logo-light.svg'
import google from '@/images/clients/google/logo-light.svg'
import riverpod from '@/images/clients/riverpod/logo-light.svg'
import etiya from '@/images/clients/etiya/logo-light.svg'
import stride from '@/images/clients/stride/logo-light.png'
import bearPeak from '@/images/clients/bearpeak/logo-light.svg'
import strapt from '@/images/clients/strapt/logo-light.svg'
import minlandsBy from '@/images/clients/minlandsby/logo-light.svg'
import overlapp from '@/images/clients/overlapp/logo-light.png'
import sos from '@/images/clients/sos/logo-light.png'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Selected collaborations
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
				{caseStudies.map((caseStudy, index) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="group grid grid-cols-1 gap-10 pt-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-center">
                <div className="relative order-last overflow-hidden rounded-3xl bg-neutral-100 shadow-inner transition duration-500 group-hover:shadow-xl lg:order-first">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-neutral-950/15 via-transparent to-transparent transition duration-500 group-hover:from-neutral-950/30" />
                  <StylizedImage
                    {...caseStudy.image}
                    shape={(index % 3) as 0 | 1 | 2}
                    className="mx-auto w-full max-w-xl justify-center p-6"
                  />
                  <div className="absolute bottom-6 left-6 flex items-center gap-4 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm backdrop-blur">
                    <Image src={caseStudy.logo} alt={caseStudy.client} className="h-8 w-8" unoptimized />
                    <span>{caseStudy.client}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                    <span className="font-semibold uppercase tracking-[0.16em] text-neutral-950">
                      {caseStudy.service}
                    </span>
                    <span aria-hidden="true">•</span>
                    <time dateTime={caseStudy.date}>{formatDate(caseStudy.date)}</time>
                  </div>
                  <h3 className="font-display text-4xl font-medium text-neutral-950">
                    {caseStudy.title}
                  </h3>
                  <div className="space-y-5 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div>
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                      className="mt-4"
                    >
                      Read the full story
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote author={caseStudy.testimonial.author} className="mt-8">
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

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
	['SoS', sos]
]

function Clients() {
  return (
    <Container className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-16 lg:mt-56">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-white">
          Collaborating with teams shaping tomorrow
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  <Image src={logo} alt={client} height={80} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Explore TechVeda case studies—design-led AI experiences launched through strategy, experimentation, and measurable outcomes.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Designing intelligent products with and for daring teams."
      >
        <p>
          Every engagement is a co-creation. Together we sketch future states, prototype with real users, and layer in responsible AI so the products we launch feel intuitive today and adaptable tomorrow.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
				client={{ name: 'MinLandsby', logo: minlandsBy }}
      >
				We approached <em>Techveda</em> because we loved their past work. They
        delivered something remarkably similar in record time.
      </Testimonial>

      <Clients />

      <ContactSection />
    </>
  )
}
