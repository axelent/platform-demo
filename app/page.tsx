import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Platform Demo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">This is a demo using shadcn/ui on Vercel.</p>
            <Button>Click Me</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
