import NextHead from "next/head";

interface HtmlHeaderProps {
  title?: string;
  description?: string;
}

export const Head = ({
  title = "Chris Straka",
  description = "This is the personal website for software developer Chris Straka. Feel free to peruse through all my tech goodies as I continue to make cool and interesting things on the internet."
}: HtmlHeaderProps) => <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧑‍💻</text></svg>" />
    <script defer src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
  </NextHead>