import Navbar from "../components/navbar";

export default function Home() {
    return (
        <div className="grid min-h-screen items-center justify-center text-white grid-row-auto items-left justify-between p-24 bg-ruski-violet bg-contain">
            <Navbar />
            <div className="max-w-2xl mx-auto h-min lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of the projects are made for college, some are made by me to learn the tech stack.
					</p>
			</div>
            <div className="mb-32 grid grid-cols-1 text-left max-w-full lg:w-full lg:max-w-8xl lg:mb-0 lg:grid-cols-3">

                {/* projects */}

                {/* medihelp */}
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            href="https://github.com/MERN-MediHelp"
            >
                <h2 className="mb-3 text-2xl font-semibold">
                MediHelp{' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                    </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    I built this project to learn MERN stack. It is a simple web app that allows users perform CRUD operations on a database.
                </p>
            </a>
            
            {/* pixel */}
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            href="https://pixelsakec.in/"
            >
                <h2 className="mb-3 text-2xl font-semibold">
                Pixel{' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                    </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    This website was built for a tech fest in my college. It is a simple website that gives information about the event and allows users to register for the event.
                </p>
            </a>

            {/* miller indices */}
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            href="https://github.com/V-nsh/MillerIndices.git"
            >
                <h2 className="mb-3 text-2xl font-semibold">
                Miller Indices{' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                    </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    I built this project with a team in first year of college. It is a desktop app made using python that can plot positive miller indices on a 3D graph.
                </p>
            </a>
            
            {/* /aRide */}
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            href="https://github.com/V-nsh/Carpool.git"
            >
                <h2 className="mb-3 text-2xl font-semibold">
                /aRide{' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                    </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    /aRide (pronounced divide a ride) is a carpooling app that I built with a team in college. It is a simple web app that allows users to share rides, find other users according to their needs and even see their registered location.
                </p>
            </a>

            {/* accounting api */}
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            href="https://github.com/V-nsh/Accounting-API.git"
            >
                <h2 className="mb-3 text-2xl font-semibold">
                Accounting API{' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                    </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    I wanted to learn Spring MVC, so I made this little API that can perform CRUD operations on a database. 
                </p>
            </a>            

            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            href="https://github.com/V-nsh/Loan-status-prediction.git"
            >
                <h2 className="mb-3 text-2xl font-semibold">
                Loan status prediction{' '}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                    </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    A machine learning model that predicts whether a loan will be approved or not. I built this project to learn machine learning. 
                </p>
            </a>  
            </div>
        </div>
    )
}