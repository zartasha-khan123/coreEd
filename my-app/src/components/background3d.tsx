// "use client"

// import { useEffect, useState } from "react"

// export function GeometricBackground() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const floatingStyle = (delay: number) => ({
//     animation: mounted ? `floatAnimation 6s ease-in-out ${delay}s infinite` : "none",
//   })

//   return (
//     <>
//       <style jsx>{`
//         @keyframes floatAnimation {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//       `}</style>

//       <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
//         <div
//           className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
//           style={{
//             ...floatingStyle(0),
//             background: "radial-gradient(circle, rgba(0, 102, 255, 0.4) 0%, rgba(0, 102, 255, 0.1) 70%)",
//           }}
//         />

//         <div
//           className="absolute -top-20 -right-20 blur-2xl"
//           style={{
//             ...floatingStyle(2),
//             width: 0,
//             height: 0,
//             borderLeft: "400px solid transparent",
//             borderRight: "400px solid transparent",
//             borderBottom: "600px solid rgba(255, 27, 107, 0.35)",
//           }}
//         />

//         <div
//           className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
//           style={{
//             ...floatingStyle(1),
//             background: "radial-gradient(circle, rgba(0, 102, 255, 0.3) 0%, rgba(0, 102, 255, 0.05) 70%)",
//           }}
//         />

//         <div
//           className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full blur-2xl"
//           style={{
//             ...floatingStyle(3),
//             background: "radial-gradient(circle, rgba(255, 27, 107, 0.35) 0%, rgba(255, 27, 107, 0.1) 70%)",
//           }}
//         />

//         <div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl"
//           style={{
//             ...floatingStyle(1.5),
//             background: "radial-gradient(circle, rgba(0, 102, 255, 0.25) 0%, rgba(0, 102, 255, 0.05) 70%)",
//           }}
//         />
//       </div>
//     </>
//   )
// }


"use client"

import { useEffect, useState } from "react"

export function GeometricBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const floatingStyle = (delay: number) => ({
    animation: mounted ? `floatAnimation 6s ease-in-out ${delay}s infinite` : "none",
  })

  return (
    <>
      <style jsx>{`
        @keyframes floatAnimation {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top-left circle */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            ...floatingStyle(0),
            background:
              "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.1) 70%)",
          }}
        />

        {/* Top-right triangle (was pink) */}
        <div
          className="absolute -top-20 -right-20 blur-2xl"
          style={{
            ...floatingStyle(2),
            width: 0,
            height: 0,
            borderLeft: "400px solid transparent",
            borderRight: "400px solid transparent",
            borderBottom: "600px solid rgba(167,139,250,0.35)", // purple-300ish
          }}
        />

        {/* Bottom-right circle */}
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            ...floatingStyle(1),
            background:
              "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0.05) 70%)",
          }}
        />

        {/* Bottom-left circle (was pink) */}
        <div
          className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full blur-2xl"
          style={{
            ...floatingStyle(3),
            background:
              "radial-gradient(circle, rgba(192,132,252,0.3) 0%, rgba(192,132,252,0.08) 70%)",
          }}
        />

        {/* Center circle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            ...floatingStyle(1.5),
            background:
              "radial-gradient(circle, rgba(167,139,250,0.25) 0%, rgba(167,139,250,0.05) 70%)",
          }}
        />
      </div>
    </>
  )
}
