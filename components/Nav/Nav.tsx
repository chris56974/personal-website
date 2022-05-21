import Link from "next/link"

const Nav = () =>
    <nav>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <a href="https://github.com/Chris56974" rel="noopener" target="_blank">Github</a>
    </nav>


export default Nav