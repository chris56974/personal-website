import Link from "next/link"

export const NavBar = () =>
  <nav>
    <Link href="/projects">Projects</Link>
    <Link href="/blog">Blog</Link>
    <a href="https://github.com/Chris56974" rel="noopener noreferrer" target="_blank">Github</a>
  </nav>
