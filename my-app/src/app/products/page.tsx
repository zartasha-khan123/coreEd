
"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { AgentCard } from "@/components/agent-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { agents } from "@/services/agents-data"
import { useSearchParams } from "next/navigation"

export default function ProductsPage() {
  // const [selectedCategory, setSelectedCategory] = useState<string>("All")
  // const [searchQuery, setSearchQuery] = useState("")

  // // Get unique categories
  // const categories = useMemo(() => {
  //   const uniqueCategories = Array.from(new Set(agents.map((agent) => agent.category)))
  //   return ["All", ...uniqueCategories]
  // }, [])

  // // Filter agents based on category and search
  // const filteredAgents = useMemo(() => {
  //   return agents.filter((agent) => {
  //     const matchesCategory = selectedCategory === "All" || agent.category === selectedCategory
  //     const matchesSearch =
  //       searchQuery === "" ||
  //       agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       agent.category.toLowerCase().includes(searchQuery.toLowerCase())
  //     return matchesCategory && matchesSearch
  //   })
  // }, [selectedCategory, searchQuery])


    const searchParams = useSearchParams();                 // ⬅️
  const initialSearch = (searchParams.get("search") ?? "").trim(); // ⬅️
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")      // keep empty to avoid hydration mismatch
  const resultsRef = useRef<HTMLDivElement | null>(null)  // ⬅️ for optional scroll

  // ⬅️ set from URL after mount, and keep in sync if URL changes
  useEffect(() => {
    setSearchQuery(initialSearch);
  }, [initialSearch]);

  // ⬅️ optional: if we arrived with a query, scroll to results (no style change)
  useEffect(() => {
    if (initialSearch && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [initialSearch]);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(agents.map((a) => a.category)))
    return ["All", ...uniqueCategories]
  }, [])

  const filteredAgents = useMemo(() => {
    const q = searchQuery.toLowerCase()
    return agents.filter((agent) => {
      const matchesCategory = selectedCategory === "All" || agent.category === selectedCategory
      const matchesSearch =
        q === "" ||
        agent.name.toLowerCase().includes(q) ||
        agent.description.toLowerCase().includes(q) ||
        agent.category.toLowerCase().includes(q) ||
        agent.developer?.name?.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])


  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="border-b border-border bg-background px-6 py-8 md:py-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-purple-700">
            Explore AI Agents
          </h1>
          <p className="mt-2 text-pretty text-base text-muted-foreground md:text-lg">
            Discover and explore our complete collection of {agents.length} powerful AI agents designed to transform
            your workflow
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filter Sidebar */}
          <aside className="lg:w-72 lg:shrink-0">
            <div className="sticky top-6 space-y-6">
              {/* Search */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Search</h3>
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <Input
                    type="text"
                    placeholder="Search agents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories Filter */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Categories</h3>
                  {selectedCategory !== "All" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedCategory("All")}
                      className="h-auto p-0 text-xs text-primary hover:text-primary/80"
                    >
                      Clear
                    </Button>
                  )}
                </div>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const count =
                      category === "All" ? agents.length : agents.filter((agent) => agent.category === category).length

                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-all duration-200 ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "bg-secondary/50 text-foreground hover:bg-secondary"
                        }`}
                      >
                        <span className="font-medium">{category}</span>
                        <Badge variant={selectedCategory === category ? "secondary" : "outline"} className="ml-2">
                          {count}
                        </Badge>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Active Filters Summary */}
              {(selectedCategory !== "All" || searchQuery) && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Active Filters</h3>
                  <div className="space-y-2">
                    {selectedCategory !== "All" && (
                      <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2">
                        <span className="text-sm text-foreground">Category: {selectedCategory}</span>
                        <button
                          onClick={() => setSelectedCategory("All")}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                    {searchQuery && (
                      <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-3 py-2">
                        <span className="text-sm text-foreground">Search: {searchQuery}</span>
                        <button
                          onClick={() => setSearchQuery("")}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredAgents.length}</span> of{" "}
                <span className="font-semibold text-foreground">{agents.length}</span> agents
              </p>
            </div>

            {filteredAgents.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredAgents.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-12 text-center">
                <svg
                  className="mb-4 h-16 w-16 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mb-2 text-xl font-semibold text-foreground">No agents found</h3>
                <p className="mb-6 text-muted-foreground">
                  Try adjusting your filters or search query to find what you're looking for.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory("All")
                    setSearchQuery("")
                  }}
                  variant="outline"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
