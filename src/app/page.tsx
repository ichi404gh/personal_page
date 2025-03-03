import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

interface ExperienceEntry {
  title: string;
  company: string;
  companyUrl?: string;
  date: string;
  bullets: string[];
}

const experience: ExperienceEntry[] = [
  {
    company: 'Company name under NDA',
    title: 'CTO',
    date: 'April 2023 - July 2024',
    bullets: [
      `grew tech department from zero to a modern agile team`,
      `handled the handover of the codebase from 5 existing projects developed by the previous tech team and successfully launched them into production on our servers`,
      `set up monitoring, alerting and backups, and built a production environment for the apps`,
      `handled 3 DDOS attacks (50k RPS)`,
      `hired and trained a team - 3 backend dev, 1 frontend dev, 1 QA`,
      `implemented VCS, CI/CD, and code review practices`,
      `implemented and advocated task/project management system`,
      `planning further development of company products from a technical perspective`,

    ]
  },
  {
    company: 'Fueled',
    companyUrl: 'https://fueled.io/',
    title: 'Software Engineer',
    date: 'August 2022 - October 2022',
    bullets: [
      `implemented ETL modules for AWS-lambda pipelines`,
      `worked on the integration of e-commerce (Shopify) apps to the product`,
    ]
  },
  {
    company: 'Amenify',
    companyUrl: 'https://www.amenify.com/',
    'title': 'Software Engineer',
    date: 'November 2020 - July 2022',
    bullets: [
      `implemented GraphQL Schema Federation into a monolithic application, which allowed us to start dividing it into microservices`,
      `created and maintained 2 back-office web applications within the product’s super-app`,
      `set up integration testing within the CI/CD pipeline`,
      `conducted load testing on a backend`,
    ]
  }
];

export default function Home() {
  return (
    <>
      <main className="p-8 container mx-auto xl:max-w-5xl">
        <header className="flex justify-between flex-col sm:flex-row">
          <div>
            <h2 className="text-2xl font-mono">Denis Filatov</h2>
            <h2 className="text-xl font-mono">Software engineer</h2>

          </div>
          <nav className="text-sm font-sans">
            <Link
              className="underline font-bold"
              href="https://www.linkedin.com/in/denis-filatov-1a192080/"
              target="_blank"
            >LinkedIn&nbsp;↗</Link>
            {' | '}
            <Link
              className="underline font-bold"
              href="mailto:hi@ichi404.me"
              target="_blank"
            >email&nbsp;me</Link>
          </nav>
        </header>

        <Section title="About me">
          <p className="">
            10 years of development background, sharp and fresh heads-on skills in python, node,
            react, and linux/docker. Previously, I was the dotnet (.net / c#) team lead with
            experience in frontend. Later - a full-stack engineer with a focus on frontend.
            Currently - leading a full stack team and participating as a tech lead.
          </p>
        </Section>

        <Section title="Experience">
          <div className="lg:grid grid-cols-2 gap-4">
            {experience.map(((ee, i) => (
              <div className={clsx('pb-4', { 'lg:row-span-2': i == 0 })} key={i}>
                <span className="font-bold">{ee.title}</span>
                {' @ '}
                {
                  ee.companyUrl
                    ? (<Link className="underline" href={ee.companyUrl}
                             target="_blank">{ee.company} ↗</Link>)
                    : (<span className="">{ee.company}</span>)
                }
                <span className="block italic text-sm opacity-70">{ee.date}</span>
                <ul className="list-inside list-disc px-4">
                  {ee.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            )))}
          </div>
          <p>
            And much more.
            {' '}
            <Link className="underline font-bold" href="/cv.pdf">Download full
              pdf</Link>.
          </p>
        </Section>
        <Section title="Notable projects">
          <div className="space-y-4">
            <NotableProject title="[project name under NDA]">
              <p>
                A project is an adult dating network. The main challenge was to migrate legacy
                projects with many in-house dependencies and unsupported runtime versions to new servers,
                alongside existing database and media storage, with as little downtime as possible. Later,
                I was involved in solving crises related to website blocking by the regulator. I was also
                involved in hiring and managing the team, building a CI-CD pipeline, and conducting work rituals.
              </p>
            </NotableProject>
            <NotableProject title="Amenify">
              <p>
                Amenify is a Proptech company that powers resident lifestyle services for apartment communities.
                These services include cleaners, food and grocery delivery, handyman, chores, car washes, pet care, and more.
                At Amenify I worked as a full-stack engineer, working with django and GraphQL on the backend and React-native
                and Apollo on the frontend. Worked in an international distributed team. I participated in splitting a
                monolithic application into microservices and also implemented GraphQL Schema Federation for this purpose. 
                I was also involved in implementing several back-offices for operator clients.
              </p>
              <p>
                At Amenify I worked as a full-stack engineer, working with django and GraphQL on the
                backend and React-native and Apollo on the frontend. Worked in an international
                distributed team. I participated in splitting a monolithic application into
                microservices, and also implemented GraphQL Schema Federation for this purpose. I
                was
                also involved in implementing several backoffices for operator clients.
              </p>
            </NotableProject>
          </div>
        </Section>
        <Section title="Hire me" enabled={true}>
          <p>
            If you see this section, it means I am currently looking for new job opportunities.
            Particularly as a <span className="font-semibold">CTO</span>, <span
            className="font-semibold">principal engineer</span> or <span className="font-semibold">lead engineer</span>.
            Feel free to contact me in any of the ways provided.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 py-4">
            <LinkButton href="https://www.linkedin.com/in/denis-filatov-1a192080/">
              Contact via Linkedin
            </LinkButton>
            <span>or</span>
            <LinkButton href="mailto:hi@ichi404.me">
              Send me an email
            </LinkButton>
          </div>
        </Section>
      </main>
      <footer className="p-8 container mx-auto xl:max-w-5xl color">
        <hr className="border-gray-400 dark:border-gray-700 pb-8"/>
        Denis Filatov, {new Date().getFullYear()}
      </footer>
    </>
  );
}

function Section({ title, children, enabled = true }: {
  title: string,
  children: React.ReactNode,
  enabled?: boolean
}) {
  if (!enabled) return null;

  return (
    <div className="group">
      <h3
        className="pt-8 pb-2 transition-[letter-spacing] ease-in-out duration-150 text-blue-900
        dark:text-blue-500 tracking-tight group-hover:tracking-wide">
        {title}
      </h3>
      <div className="font-sans">{children}</div>
    </div>
  );
}

function NotableProject({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function LinkButton({ href, children }: { href: string, children: React.ReactNode }) {
  return <Link
    className="inline-flex items-center justify-center space-x-2 py-3 px-5 text-base font-medium
    rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800
    dark:hover:bg-gray-700 dark:hover:text-white"
    href={href}
    target="_blank"
  >
    <span>{children}</span>
    <span>↗</span>
  </Link>
}
