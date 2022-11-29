import Link from 'next/link'
import { StateSample } from './StateSample'

export default function Home() {
  return (
    <div>
      <Link href="/chat">Feature sample - Chat</Link>
      <StateSample />
    </div>
  )
}
