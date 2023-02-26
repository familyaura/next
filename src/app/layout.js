import './globals.css'
import Combine from './combine'
export const metadata = {
  title: 'NEXT Family Aura',
  description: 'NEXT Family Auro',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
