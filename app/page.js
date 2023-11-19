import Navbar from "./components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-ruski-violet bg-contain text-white">
      {/* name and about */}
      <div className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold 
                    bg-gradient-to-r bg-clip-text  text-transparent 
                    from-indigo-500 via-purple-500 to-indigo-500
                    animate-text">
        Vansh
      </div>
      <div className="py-5 px-5 text-french-gray text-sm md:text-base lg:text-lg xl:text-xl">
        Hi, I am a developer.
      </div>

      {/* projects and contact */}
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {/* projects */}
        <Link
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          href="/projects"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Projects{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            View my projects.
          </p>
        </Link>

        {/* contact */}
        <Link
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          href="/contact"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Contact{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Let&apos;s connect!
          </p>
        </Link>

        {/* Resume */}
        <Link
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          href="/resume.pdf"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Resume{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            View my resume.
          </p>
        </Link>
      </div>
    </main>

  )
}
