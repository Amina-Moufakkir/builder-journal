import { lazy, Suspense, useEffect, useState } from 'react'
import Hero from './sections/Hero.tsx'
import Journey from './sections/Journey.tsx'
import FeaturedProject from './sections/FeaturedProject.tsx'

// Builder Journal is a single page. Its one separate destination is the Edgebook AI case study, which
// the flagship section links to. Rather than take on a routing dependency for a single place, that
// view is selected by a hash *route* (`#/…`), kept deliberately distinct from the in-page anchors
// (`#projects`, `#journey`) the page already uses to scroll between sections.
//
// The case study is a long, content-heavy document, so it is code-split with React.lazy: its bundle is
// fetched only when a visitor actually navigates to it, keeping the homepage's first load lean.
const CASE_STUDY_ROUTE = '#/projects/edgebook-ai'

const EdgebookCaseStudy = lazy(() => import('./pages/EdgebookCaseStudy.tsx'))

// Track the URL fragment so a route change re-renders. `hashchange` covers link clicks and back/
// forward; the initialiser covers a fresh load or a deep link straight to the case study.
function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return hash
}

// The application shell. Portfolio sections are composed here as each one is built.
export default function App() {
  const hash = useHash()
  const onCaseStudy = hash === CASE_STUDY_ROUTE

  // In-page anchors scroll natively while the home view is mounted, but returning to one *from* the
  // case study needs a nudge: the target element only exists once the home view has rendered again.
  // Scrolling it into view after render covers both that case and a fresh deep link to an anchor. No
  // `behavior` is passed, so the motion follows the page's scroll-behavior — instant under reduced
  // motion (src/styles/index.css).
  useEffect(() => {
    if (onCaseStudy) return
    if (hash.length > 1 && !hash.startsWith('#/')) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }
  }, [hash, onCaseStudy])

  if (onCaseStudy) {
    return (
      <Suspense
        fallback={
          <main className="max-w-content mx-auto px-gutter py-section">
            <p className="text-ink-faint" role="status">
              Loading the case study&hellip;
            </p>
          </main>
        }
      >
        <EdgebookCaseStudy />
      </Suspense>
    )
  }

  return (
    /* Main page content */
    <main>
      <Hero />
      <Journey />
      <FeaturedProject />

      {/* Principles, selected projects, about, and contact follow in later milestones. */}
    </main>
  )
}
