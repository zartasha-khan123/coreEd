"use client";

import { AgentCard } from "@/components/agent-card";
import { agents } from "@/services/agents-data";
import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { GeometricBackground } from "@/components/background3d";
import { profiles } from "@/services/profileCard";
import { ProfileCard } from "@/components/profileCard";
import { useRouter } from "next/navigation";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
   const router = useRouter(); // ⬅️ add this


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchTerm.trim();
    router.push(`/products?search=${encodeURIComponent(q)}`);
    console.log("Search term: ", searchTerm);
  };

  // ✅ Add this line so your filtered results actually work:
  // const filtered = agents.filter((agent) => {
  //   const inName = agent.name.toLowerCase().includes(searchTerm.toLowerCase());
  //   const inDescription = agent.description
  //     ?.toLowerCase()
  //     .includes(searchTerm.toLowerCase());
  //   const inDeveloper = agent.developer?.name
  //     ?.toLowerCase()
  //     .includes(searchTerm.toLowerCase());
  //   const inWorkflows = agent.videos?.some((video) =>
  //     video.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   return inName || inDescription || inDeveloper || inWorkflows;
  // });
 const filtered = agents.filter((agent) => {
    const q = searchTerm.toLowerCase();
    const inName = agent.name.toLowerCase().includes(q);
    const inDescription = agent.description?.toLowerCase().includes(q);
    const inDeveloper = agent.developer?.name?.toLowerCase().includes(q);
    const inWorkflows = agent.videos?.some((v) => v.title.toLowerCase().includes(q));
    return inName || inDescription || inDeveloper || inWorkflows;
  });
return (
    <>
    <main className="relative bg-black">
      {/* Dark Purple Gradient Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[320px]"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(102,86,200,0.45) 0%, rgba(102,86,200,0.2) 50%, rgba(0,0,0,0) 100%)",
          filter: "saturate(110%)",
        }}
      />

      <section
  className="relative isolate"
  style={{
    backgroundImage: "url('/grid.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>

       
        <div className="relative mx-auto w-full max-w-[1100px] px-4 pt-16 pb-20 md:pt-20 md:pb-28 text-center z-10">
          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#2c3e50] px-4 py-2 shadow-2xl">
            <span
              aria-hidden
              className="inline-block h-4 w-4 rounded-full bg-gradient-to-br from-[#7B8BFF] to-[#586BF4]"
            />
            <span className="text-sm font-medium text-slate-100">AI Agent Discovery</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-[40px] leading-tight font-semibold text-purple-500 md:text-[64px] transition-all duration-1000 transform hover:text-[#A7B8D2] hover:scale-105 hover:transition-transform">
            Find Your Perfect AI Agent
          </h1>

          {/* Subheading */}
          <h2 className="mx-auto mt-3 max-w-[820px] text-[18px] leading-relaxed text-slate-400 md:mt-4 transition-all duration-500 hover:animate-bounce ease-in-out">
            Discover powerful AI agents tailored to your specific tasks and goals.
          </h2>

          {/* Search Bar */}
          {/* <form
            className="mx-auto mt-8 w-full max-w-[920px] md:mt-10"
            onSubmit={handleSearchSubmit}
          >
            <div className="flex items-center justify-between rounded-[18px] bg-[#1f2632] p-2 ring-1 ring-black/20 shadow-lg ">
              {/* Input + icon 
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2 md:px-5 md:py-3 ">
                {/* Outer + inner bullet styled like the field icon 
                <span className="relative inline-flex h-6 w-6 items-center justify-center" >
                  <span className="absolute h-6 w-6 rounded-full border border-slate-500"  style={{
      borderColor: searchTerm ? "#7e22ce" : "rgb(100,116,139)",
    }} />
                  <span className="relative h-2 w-2 rounded-full"
    style={{
      backgroundColor: searchTerm ? "#7e22ce" : "rgb(148,163,184)",
    }} />
                </span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search for an AI agent by task or goal..."
                  className="w-full min-w-0 bg-transparent text-[16px] text-slate-300 placeholder:text-slate-500 focus:outline-none rounded-md py-2 px-4 focus:ring-2 focus:ring-[#bb50c9] transition-all duration-300"
                />
              </div>

              
              <button
  type="submit"
  className="ml-2 inline-flex items-center gap-2 rounded-[14px] px-5 py-3 text-[16px] font-medium shadow-xl hover:opacity-95 focus-visible:opacity-95"
  style={{
    background: "linear-gradient(to bottom right, #a78bfa, #7e22ceff)",
    color: "#ffffff",
  }}
  aria-label="Search"
>
  <Search className="h-5 w-5" style={{ color: "#ffffff" }} />
  Search
</button>


              
            </div>
          </form> */}


          <form
  className="mx-auto mt-8 w-full max-w-[920px] md:mt-10"
  onSubmit={handleSearchSubmit}
>
  <div className="flex items-center justify-between rounded-[18px] bg-[#1f2632] p-2 ring-1 ring-black/20 shadow-lg ">
    {/* Input + icon */}
    <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2 md:px-5 md:py-3 ">
      <span className="relative inline-flex h-6 w-6 items-center justify-center">
        <span
          className="absolute h-6 w-6 rounded-full border border-slate-500"
          style={{
            borderColor: searchTerm ? "#7e22ce" : "rgb(100,116,139)",
          }}
        />
        <span
          className="relative h-2 w-2 rounded-full"
          style={{
            backgroundColor: searchTerm ? "#7e22ce" : "rgb(148,163,184)",
          }}
        />
      </span>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for an AI agent by task or goal..."
        className="w-full min-w-0 bg-transparent text-[16px] text-slate-300 placeholder:text-slate-500 focus:outline-none rounded-md py-2 px-4 focus:ring-2 focus:ring-[#bb50c9] transition-all duration-300"
      />
    </div>

    <button
      type="submit"
      className="ml-2 inline-flex items-center gap-2 rounded-[14px] px-5 py-3 text-[16px] font-medium shadow-xl hover:opacity-95 focus-visible:opacity-95"
      style={{
        background: "linear-gradient(to bottom right, #a78bfa, #7e22ceff)",
        color: "#ffffff",
      }}
      aria-label="Search"
    >
      <Search className="h-5 w-5" style={{ color: "#ffffff" }} />
      Search
    </button>
  </div>
</form>



{searchTerm && (
  <div className="mt-6">
    <h2 className="text-lg font-semibold text-white mb-4">
      Search Results for "{searchTerm}"
    </h2>

    {/* {filtered.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((agent) => (
          <div key={agent.id} className="p-4 rounded-md bg-[#2a2f3a] shadow">
            <h3 className="text-white font-medium">{agent.name}</h3>
            <p className="text-slate-400 text-sm">
              {agent.description}
            </p>
            <p className="text-slate-300 text-xs mt-2">
              Developer: {agent.developer?.name}
            </p>
            {agent.videos?.length > 0 && (
              <ul className="mt-2 text-xs text-slate-400">
                {agent.videos.map((video, i) => (
                  <li key={i}>• {video.title}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    ) : (
      <p className="text-slate-500">No matching results.</p>
    )}
  </div>
)}
*/}

 {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((agent) => (
                // ⬇️ make the result card clickable to details (no style change)
                <Link key={agent.id} href={`/agents_details/${agent.id}`} className="block">
                  <div className="p-4 rounded-md bg-[#2a2f3a] shadow">
                    <h3 className="text-white font-medium">{agent.name}</h3>
                    <p className="text-slate-400 text-sm">{agent.description}</p>
                    <p className="text-slate-300 text-xs mt-2">
                      Developer: {agent.developer?.name}
                    </p>
                    {agent.videos?.length > 0 && (
                      <ul className="mt-2 text-xs text-slate-400">
                        {agent.videos.map((video, i) => (
                          <li key={i}>• {video.title}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">No matching results.</p>
          )}
        </div>
      )}

        </div> 


      </section>

  
      
  {/* Hero Section */}
      <section className="border-b border-border px-6 py-20 md:py-32 relative"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('/bg1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity:0.8

    
  }}
  >
    <div className="mx-auto max-w-7xl">
    

          <h1
  className="animate-fade-in-up text-center text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl transition-colors duration-500 hover:text-purple-300"
>
  Transform Your Workflow with AI Agents
</h1>

         

         <p className="mx-auto mt-6 max-w-2xl text-center text-lg md:text-xl leading-relaxed text-purple-600 drop-shadow-lg">
  Discover powerful AI agents designed to automate tasks, boost productivity, and revolutionize the way you work.
</p>


        </div>
      </section>

      {/* Agents Grid */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">Featured AI Agents</h2>
            <p className="mt-2 text-muted-foreground">Explore our collection of specialized AI agents</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
         
 <div className="mt-12 flex justify-center">
  <Link
    href="/products"
    className="group inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
    style={{
      background: "linear-gradient(90deg, #a855f7 0%, #9333ea 35%, #7e22ce 100%)",
      boxShadow:
        "0 10px 28px rgba(168, 85, 247, 0.55), 0 0 0 1px rgba(255,255,255,0.10) inset, 0 0 20px rgba(126, 34, 206, 0.35)",
    }}
  >
    Show More Agents
    <svg
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </Link>
</div>

        </div>

      </section>
    </main>
     <main className="min-h-screen relative">
      <GeometricBackground />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
            Discover Our Creators
          </h1>
          <p className="text-lg  max-w-2xl mx-auto text-purple-600">
            Talented professionals dedicated to building exceptional digital experiences
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.id} profile={profile} index={index} />
          ))}
        </div>
      </div>
    </main>
   
    </>
  );
} 
