import React from 'react';
import { resumeData } from './data/resume';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Card from './components/Card';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 max-w-6xl mx-auto">
      <ThemeToggle />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min items-start">

        {/* Row 1: Hero Section (Full Width) */}
        <Hero profile={resumeData.profile} />

        {/* Row 2: Skills (Full Width) */}
        <Skills skills={resumeData.skills} />

        {/* Row 3: Main Content Split */}
        {/* Left Column: Experience (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <Experience experience={resumeData.experience} />
        </div>

        {/* Right Column: Projects Deck (1/3) */}
        <div className="lg:col-span-1 space-y-6">
          <Projects projects={resumeData.projects} />
        </div>
      </div>

      <footer className="mt-12 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} {resumeData.profile.name}. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
