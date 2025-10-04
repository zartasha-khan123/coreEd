"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { agents } from "@/services/agents-data"

type Agent = typeof agents[number];


interface AgentCardProps {
  agent: Agent
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Link href={`/agents_details/${agent.id}`}>
      <Card className="group h-full border-purple-600 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
        <CardHeader>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary text-4xl transition-transform duration-300 group-hover:scale-110">
              {agent.icon}
            </div>
            <Badge variant="secondary" className="text-xs">
              {agent.category}
            </Badge>
          </div>
          <CardTitle className="text-xl font-bold text-balance group-hover:text-primary transition-colors">
            {agent.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed text-muted-foreground">
            {agent.description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
