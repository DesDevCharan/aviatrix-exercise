import React from "react"
import { buttonVariants } from "../ui/button"
// import { Star } from 'lucide-react';

const Nav = React.forwardRef<HTMLElement>(
    () => {
        return <nav className="flex justify-between sticky top-0 bg-blue-600 p-5 drop-shadow shadow-blue-600">
            <h1 className="text-white text-2xl text-left">Charanbabu Karnam</h1>
            <a
                href="https://github.com/desdevcharan"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants() + `absolute right-0 top-0`}
            >
          {/* <Star fill="yellow" strokeWidth={0} /> */}
          ⭐️ on GitHub
            </a>
        </nav>
    }
)
Nav.displayName = "Nav"

export { Nav }