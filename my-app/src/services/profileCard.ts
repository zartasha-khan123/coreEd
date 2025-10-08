export interface Profile {
  id: string
  name: string
  role: string
  rating: number
  activity: number
  image: string
  bio: string
  skills: string[]
  projects: number
  experience: string
  joined?: string  
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Full Stack Developer",
    rating: 86,
    activity: 92,
    image: "/professional-woman-developer-smiling-with-glasses.jpg",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    projects: 47,
    experience: "5 years",
    joined: "October 2020" 
  },
  {
    id: "2",
    name: "James Wilson",
    role: "UI/UX Designer",
    rating: 94,
    activity: 88,
    image: "/professional-man-designer-in-suit-creative.jpg",
    bio: "Creative designer focused on crafting beautiful and intuitive user experiences.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    projects: 62,
    experience: "6 years",
    joined: "October 2020" 
  },
  {
    id: "3",
    name: "Emma Johnson",
    role: "Backend Engineer",
    rating: 91,
    activity: 85,
    image: "/professional-woman-engineer-backend-developer.jpg",
    bio: "Backend specialist with expertise in microservices architecture and cloud infrastructure.",
    skills: ["Python", "AWS", "Docker", "Kubernetes"],
    projects: 38,
    experience: "4 years",
    joined: "October 2020" 
  },
  {
    id: "4",
    name: "Michael Chen",
    role: "DevOps Engineer",
    rating: 89,
    activity: 95,
    image: "/professional-asian-man-devops-engineer-working.jpg",
    bio: "DevOps expert passionate about automation and continuous delivery pipelines.",
    skills: ["Jenkins", "Terraform", "GitLab CI", "Monitoring"],
    projects: 53,
    experience: "7 years",
    joined: "October 2020" 
  },
  {
    id: "5",
    name: "Sarah Martinez",
    role: "Product Manager",
    rating: 93,
    activity: 90,
    image: "/professional-woman-product-manager-confident-busin.jpg",
    bio: "Strategic product manager with a track record of launching successful digital products.",
    skills: ["Product Strategy", "Agile", "Analytics", "Roadmapping"],
    projects: 29,
    experience: "8 years",
    joined: "October 2020" 
  },
  {
    id: "6",
    name: "David Kim",
    role: "Mobile Developer",
    rating: 87,
    activity: 83,
    image: "/professional-man-mobile-developer-coding-at-desk.jpg",
    bio: "Mobile development expert specializing in cross-platform applications.",
    skills: ["React Native", "Swift", "Kotlin", "Flutter"],
    projects: 41,
    experience: "5 years",
    joined: "October 2020" 
  },
  {
    id: "7",
    name: "Lisa Anderson",
    role: "Data Scientist",
    rating: 95,
    activity: 87,
    image: "/professional-woman-data-scientist-analyst-working.jpg",
    bio: "Data scientist leveraging machine learning to solve complex business problems.",
    skills: ["Python", "TensorFlow", "SQL", "Data Visualization"],
    projects: 34,
    experience: "6 years",
    joined: "October 2020" 
  },
  {
    id: "8",
    name: "Robert Taylor",
    role: "Security Engineer",
    rating: 92,
    activity: 89,
    image: "/professional-man-security-engineer-cybersecurity-e.jpg",
    bio: "Cybersecurity specialist focused on protecting applications and infrastructure.",
    skills: ["Penetration Testing", "Security Audits", "Compliance", "Encryption"],
    projects: 45,
    experience: "9 years",
    joined: "October 2020" 
  },
  {
    id: "9",
    name: "Jennifer Lee",
    role: "Frontend Developer",
    rating: 90,
    activity: 94,
    image: "/professional-woman-frontend-developer-coding-yello.jpg",
    bio: "Frontend developer passionate about creating performant and accessible web experiences.",
    skills: ["Vue.js", "CSS", "Accessibility", "Performance"],
    projects: 56,
    experience: "4 years",
    joined: "October 2020" 
  },
]

export function getProfileById(id: string): Profile | undefined {
  return profiles.find((profile) => profile.id === id)
}
