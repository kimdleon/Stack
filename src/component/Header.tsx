import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <nav className="mx-auto h-16 w-pc bg-gray-200 py-4 px-16">
      <ul className="flex gap-x-16">
        <li>
          <Link className="button" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="button" href="/chat">
            Chat
          </Link>
        </li>
      </ul>
    </nav>
  )
}
