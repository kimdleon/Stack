import { Button } from '@atom/Button'
import Link from 'next/link'
import { StateSample } from './StateSample'

export default function Home() {
  return (
    <div>
      <Link href="/chat">Feature sample - Chat</Link>
      <StateSample />
      <Button size="sm">Hello</Button>
      <Button size="md">Hello</Button>
      <Button size="lg">Hello</Button>
    </div>
  )
}
