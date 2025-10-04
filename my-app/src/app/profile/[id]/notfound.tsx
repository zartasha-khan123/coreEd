import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-8 max-w-md text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Profile Not Found</h2>
          <p className="text-muted-foreground">{"The profile you're looking for doesn't exist."}</p>
        </div>

        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Team
          </Button>
        </Link>
      </Card>
    </main>
  )
}
