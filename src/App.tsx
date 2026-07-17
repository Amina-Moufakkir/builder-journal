import Hero from './sections/Hero.tsx'
import Journey from './sections/Journey.tsx'

// The application shell. Portfolio sections are composed here as each one is built.
export default function App() {
  return (
    /* Main page content */
    <main>
      <Hero />
      <Journey />

      {/* Principles, projects, about, and contact follow in later milestones. */}
    </main>
  )
}
