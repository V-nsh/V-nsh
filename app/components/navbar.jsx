import Link from "next/link";

export default function Navbar() { 
    return (
        <div className="fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b border-transparent">
            <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                <div className="flex justify-between gap-8">
                <Link href="/V-nsh/projects"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
                >
                    Projects
                </Link> 
                <Link href="/V-nsh/contact"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
                >
                    Contact
                </Link> 
                </div>
                <Link href="/V-nsh">
                    Home
                </Link>
            </div>
        </div>
    )
}