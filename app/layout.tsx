export const metadata = {
  title: "Platform Demo",
  description: "A simple demo using shadcn/ui and Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
