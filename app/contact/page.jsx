import Link from "next/link";
import Navbar from "../components/navbar";
import {Github, Linkedin, Mail} from "lucide-react";

export default function Home() {
    const socials = [
        {
            icon: <Github />,
            link: "https://github.com/V-nsh",
            label: "GitHub",
            handle: "V-nsh",
        },
        {
            icon: <Linkedin />,
            link: "https://www.linkedin.com/in/vansh-purohit-8a63a2215/",
            label: "LinkedIn",
            handle: "Vansh Purohit",
        },
        {
            icon: <Mail />,
            link: "mailto:dev.vanshpurohit@gmail.com",
            label: "@gmail.com",
            handle: "dev.vanshpurohit",
        },
    ]
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-ruski-violet bg-contain">
            <Navbar />

            <div className="container flex items-center justify-center px-4 mx-auto">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
                    {socials.map((soc) => (
                        <div key={soc.label} className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                            <Link href={soc.link}
                            target="_blank"
                            className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                            > 
                            <span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{soc.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-md font-medium duration-150 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
										{soc.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{soc.label}
									</span>
								</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}