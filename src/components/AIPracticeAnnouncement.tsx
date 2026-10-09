'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/Button'

const AI_PRACTICE_URL = 'https://ai.techveda.dk/'
const DISMISSED_KEY = 'techveda-ai-practice-announcement-dismissed'

export function AIPracticeAnnouncement() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem(DISMISSED_KEY) !== 'true') {
      setIsOpen(true)
    }
  }, [])

  function dismiss() {
    window.localStorage.setItem(DISMISSED_KEY, 'true')
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/60 px-6 py-10 backdrop-blur-sm"
      role="presentation"
    >
      <section
        aria-labelledby="ai-practice-title"
        aria-modal="true"
        className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl sm:p-10"
        role="dialog"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
          Techveda
        </p>
        <h2
          id="ai-practice-title"
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
        >
          We have a new AI practice.
        </h2>
        <p className="mt-4 text-lg leading-7 text-neutral-600">
          Take me there and learn more about Techveda’s AI, or stay here.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={AI_PRACTICE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="inline-flex justify-center rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Take me there
          </a>
          <Button type="button" invert onClick={dismiss}>
            Stay here
          </Button>
        </div>
        <button
          type="button"
          aria-label="Close announcement"
          onClick={dismiss}
          className="absolute right-5 top-5 rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-950"
        >
          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-current">
            <path d="m5.7 4.3 4.3 4.3 4.3-4.3 1.4 1.4-4.3 4.3 4.3 4.3-1.4 1.4-4.3-4.3-4.3 4.3-1.4-1.4L8.6 10 4.3 5.7z" />
          </svg>
        </button>
      </section>
    </div>
  )
}
