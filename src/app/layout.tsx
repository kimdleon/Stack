import './globals.css'
import { Trpcclient } from './TrpcClient'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Trpcclient>
      <html lang="en">
        <head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>{children}</body>
      </html>
    </Trpcclient>
  )
}
