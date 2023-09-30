import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24 bg-ruski-violet bg-contain">
      {/* <Navbar /> */}
      {/* name and about */}
      <div className="grid grid-rows-2">
        <div className="text-7xl font-semibold 
              bg-gradient-to-r bg-clip-text  text-transparent 
              from-indigo-500 via-purple-500 to-indigo-500
              animate-text lg:text-8xl">Vansh</div>
        <div className="py-5 px-12 text-french-gray">Hi, I am a developer.</div>
      </div>

      {/* projects and contact */}
      <div className="mb-32 grid grid-cols-1 text-left max-w-full lg:max-w-8xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mb:grid-cols-1 sm:grid-cols-1"> 

        {/* projects */}
        <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        href="/projects"
        >
          <h2 className="mb-3 text-2xl font-semibold">
          Projects{' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            View my projects.
          </p>
          </a>

        {/* contact */}
        <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        href="/contact"
        >
          <h2 className="mb-3 text-2xl font-semibold">
        Contact{' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Let's connect!
          </p>
        </a>

          {/* Resume */}
        <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        href="/resume.pdf"
        >
          <h2 className="mb-3 text-2xl font-semibold">
        Resume{' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
            View my resume.
          </p>
        </a>

      </div>
    </main>
  )
}
