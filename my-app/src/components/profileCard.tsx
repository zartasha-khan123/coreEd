
// "use client"

// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { useRouter } from "next/navigation"
// import Image from "next/image"
// import { useState, useEffect } from "react"
// import { Profile } from "@/services/profileCard"

// interface ProfileCardProps {
//   profile: Profile
//   index: number
// }

// export function ProfileCard({ profile, index }: ProfileCardProps) {
  
//   const router = useRouter()
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true)
//     }, index * 100)
//     return () => clearTimeout(timer)
//   }, [index])

//   const handleViewProfile = () => {
//     router.push(`/profile/${profile.id}`)
//   }

//   return (
//     <Card
//       className="relative overflow-hidden bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer group hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(30px)",
//         transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
//       }}
//       onClick={handleViewProfile}
//     >
//       {/* Gradient overlay on hover */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//       <div className="relative p-8 flex flex-col items-center text-center space-y-6">
//         {/* Profile Image */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
//           <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-slate-700 group-hover:border-blue-500 transition-colors duration-500">
//             <Image src={profile.image || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
//           </div>
//         </div>

//         {/* Name and Role */}
//         <div className="space-y-2">
//           <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
//             {profile.name}
//           </h3>
//           <p className="text-slate-400 text-sm">{profile.role}</p>
//         </div>

//         {/* View Profile Button */}
//         <Button
//           variant="outline"
//           className="w-full bg-transparent hover:bg-blue-500/10 text-slate-300 hover:text-white border border-slate-700 hover:border-blue-500 transition-all duration-300"
//           onClick={(e) => {
//             e.stopPropagation()
//             handleViewProfile()
//           }}
//         >
//           View Profile
//         </Button>

//         {/* Stats */}
//         <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-slate-700/50">
//           <div className="space-y-1">
//             <p className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
//               {profile.rating}%
//             </p>
//             <p className="text-xs text-slate-500">Rating</p>
//           </div>
//           <div className="space-y-1">
//             <p className="text-3xl font-bold text-pink-500 group-hover:scale-110 transition-transform duration-300">
//               {profile.activity}%
//             </p>
//             <p className="text-xs text-slate-500">Activity</p>
//           </div>
//         </div>
//       </div>
//     </Card>
//   )
// }


// "use client"

// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { useRouter } from "next/navigation"
// import Image from "next/image"
// import { useState, useEffect } from "react"
// import { Profile } from "@/services/profileCard"

// interface ProfileCardProps {
//   profile: Profile
//   index: number
// }

// export function ProfileCard({ profile, index }: ProfileCardProps) {
//   const router = useRouter()
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true)
//     }, index * 100)
//     return () => clearTimeout(timer)
//   }, [index])

//   const handleViewProfile = () => {
//     router.push(`/profile/${profile.id}`)
//   }

//   return (
//     <Card
//       className="relative overflow-hidden 
//       bg-slate-900/60 
//       backdrop-blur-md 
//       border border-slate-700/50 
//       hover:border-purple-500/50 
//       transition-all duration-500 
//       cursor-pointer group 
//       hover:scale-[1.02] 
//       hover:shadow-2xl 
//       hover:shadow-purple-500/20"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(30px)",
//         transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
//       }}
//       onClick={handleViewProfile}
//     >
//       {/* Gradient overlay on hover */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//       <div className="relative p-8 flex flex-col items-center text-center space-y-6">
//         {/* Profile Image */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
//           <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-slate-700 group-hover:border-purple-500 transition-colors duration-500">
//             <Image src={profile.image || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
//           </div>
//         </div>

//         {/* Name and Role */}
//         <div className="space-y-2">
//           <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
//             {profile.name}
//           </h3>
//           <p className="text-slate-400 text-sm">{profile.role}</p>
//         </div>

//         {/* View Profile Button */}
//         <Button
//           variant="outline"
//           className="w-full bg-transparent hover:bg-purple-500/10 text-slate-300 hover:text-white border border-slate-700 hover:border-purple-500 transition-all duration-300"
//           onClick={(e) => {
//             e.stopPropagation()
//             handleViewProfile()
//           }}
//         >
//           View Profile
//         </Button>

//         {/* Stats */}
//         <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-slate-700/50">
//           <div className="space-y-1">
//             <p className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
//               {profile.rating}%
//             </p>
//             <p className="text-xs text-slate-500">Rating</p>
//           </div>
//           <div className="space-y-1">
//             <p className="text-3xl font-bold text-purple-800 group-hover:scale-110 transition-transform duration-300">
//               {profile.activity}%
//             </p>
//             <p className="text-xs text-slate-500">Activity</p>
//           </div>
//         </div>
//       </div>
//     </Card>
//   )
// }


"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Profile } from "@/services/profileCard"

interface ProfileCardProps {
  profile: Profile
  index: number
}

export function ProfileCard({ profile, index }: ProfileCardProps) {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 100)
    return () => clearTimeout(timer)
  }, [index])

  const handleViewProfile = () => {
    router.push(`/profile/${profile.id}`)
  }

  return (
    <Card
      className="relative overflow-hidden bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 cursor-pointer group hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
      onClick={handleViewProfile}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-8 flex flex-col items-center text-center space-y-6">
        
        {/* Profile Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-[12px] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative w-32 h-32 rounded-[12px] overflow-hidden border-4 border-slate-700 group-hover:border-purple-500 transition-colors duration-500">
            <Image
              src={profile.image || "/placeholder.svg"}
              alt={profile.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Name and Role */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
            {profile.name}
          </h3>
          <p className="text-slate-400 text-sm">{profile.role}</p>
        </div>

        {/* View Profile Button */}
        <Button
          variant="outline"
          className="w-full bg-transparent hover:bg-purple-500/10 text-slate-300 hover:text-white border border-slate-700 hover:border-purple-500 transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation()
            handleViewProfile()
          }}
        >
          View Profile
        </Button>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-slate-700/50">
          <div className="space-y-1">
            <p className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
              {profile.rating}%
            </p>
            <p className="text-xs text-slate-500">Rating</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-purple-500 group-hover:scale-110 transition-transform duration-300">
              {profile.activity}%
            </p>
            <p className="text-xs text-slate-500">Activity</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
