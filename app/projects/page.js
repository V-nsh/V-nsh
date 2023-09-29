import Navbar from "../components/navbar";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-row items-left justify-between p-24 bg-ruski-violet bg-contain">
            <Navbar />
            <div className="max-w-2xl mx-auto h-min lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of the projects are made for college, some are made by me to learn the tech stack.
					</p>
			</div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                
            </div>
        </div>
    )
}