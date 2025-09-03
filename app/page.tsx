import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Mono Repo Demo</h1>
              <p className="text-muted-foreground">Connected GitHub Repository Frontend</p>
            </div>
            <Badge variant="secondary">v0 Connected</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground text-balance">Your Frontend is Ready</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              This is your connected GitHub repository running in v0. The project includes Next.js 15, shadcn/ui
              components, and Tailwind CSS v4.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                View Components
              </Button>
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">🎨 Design System</CardTitle>
                <CardDescription>Complete shadcn/ui component library with dark mode support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Buttons</Badge>
                  <Badge variant="outline">Cards</Badge>
                  <Badge variant="outline">Forms</Badge>
                  <Badge variant="outline">Navigation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">⚡ Next.js 15</CardTitle>
                <CardDescription>Latest Next.js with App Router and server components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">App Router</Badge>
                  <Badge variant="outline">Server Components</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Analytics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">🎯 Tailwind CSS v4</CardTitle>
                <CardDescription>Modern styling with custom design tokens and utilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Design Tokens</Badge>
                  <Badge variant="outline">Dark Mode</Badge>
                  <Badge variant="outline">Animations</Badge>
                  <Badge variant="outline">Responsive</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Component Showcase */}
          <section className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Component Showcase</h3>
            <Card>
              <CardHeader>
                <CardTitle>Available UI Components</CardTitle>
                <CardDescription>Your project includes these pre-built components ready to use</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>Built with Next.js, shadcn/ui, and Tailwind CSS • Connected via v0</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
