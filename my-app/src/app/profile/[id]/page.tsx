// app/profile/[id]/page.tsx

"use client"
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProfileById } from "@/services/profileCard";
import { agents } from "@/services/agents-data";    

import {
  ArrowLeft,
  Eye,
  DollarSign,
  Calendar,
  Briefcase,
  Award,
  ShoppingBag,
  PhoneCall,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
import Workflows from "@/components/workflows";

interface ProfilePageProps {
  params: { id: string };
}


function pickAgent(profile: { role?: string }) {

  
  const role = (profile.role || "").toLowerCase();

  if (role.includes("data")) return agents.find(a => a.category === "Analytics") || agents[0];
  if (role.includes("design") || role.includes("ui") || role.includes("ux")) return agents.find(a => a.category === "Design") || agents[0];
  if (role.includes("support")) return agents.find(a => a.category === "Customer Service") || agents[0];
  if (role.includes("sales")) return agents.find(a => a.category === "Sales") || agents[0];
  if (role.includes("content") || role.includes("marketing")) return agents.find(a => a.category === "Marketing") || agents[0];

  return agents.find(a => a.category === "Development") || agents[0];
}


/* ---------- Helpers ---------- */
function computeViews(id: string) {
  const n = Number(id) || 1;
  return (n * 7351 + 24890).toLocaleString();
}
function computeJoined(id: string) {
  const n = (Number(id) || 1) * 7;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = 2019 + (n % 6); // 2019–2024
  const month = months[n % 12];
  return `${month} ${year}`;
}

function Counter({ target, duration = 2000, prefix = "", suffix = "" ,}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}){
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = 16; // ~60fps
    const steps = Math.ceil(duration / incrementTime);
    const stepValue = (end - start) / steps;

    let current = start;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}


export default function ProfilePage({ params }: ProfilePageProps) {
  const { id } = params;
  const profile = getProfileById(id);
  if (!profile) notFound();

  const agent = pickAgent(profile);


  const views = computeViews(id);
  const joined = computeJoined(id);
  const engagement = profile.activity; // %
  const price = (99 + (Number(id) || 1) * 10).toFixed(2);
  const purchases = (Number(id) * 3500 + 18000).toLocaleString();

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back */}
        <Link href="/#profile">
          <Button
            variant="ghost"
            className="mb-6 text-gray-300 hover:bg-gray-900/60 bg-gray-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Team
          </Button>
        </Link>

        {/* Page heading */}
        <div className="text-center mb-10 space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-balance bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-transparent">
            Accelerate Your Tech Career
          </h1>
          <p className="text-base md:text-lg text-gray-300/90 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their careers
          </p>
        </div>

        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700" />
          <div className="relative m-3 rounded-xl bg-gray-900 p-8 md:p-12 border border-purple-500/10">
            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* LEFT */}
              <div className="flex-1 space-y-6">
              
<h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
  {profile.role} — <br/><span className="text-xl md:text-2xl font-normal text-purple-300">Professional Profile</span>
</h2>

                <p className="text-base md:text-lg text-gray-300 max-w-2xl">
                  {profile.bio} Work with{" "}
                  <span className="font-medium text-purple-500">
                    {profile.name}
                  </span>{" "}
                  on high-impact projects—clean code, reliable delivery, and
                  clear communication.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="px-3 py-1 text-sm bg-gray-800 text-white border border-purple-700 cursor-pointer hover:bg-purple-800 transition-colors"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>

                {/* Quick metrics: Views | Engagement | Price | Joined */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 pt-2">
                  <div className="rounded-lg border border-gray-800 bg-gray-900/70 p-4 hover:border-purple-500/30 transition">
                    <div className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-purple-300" />
                      <span className="text-sm text-gray-400">Views</span>
                    </div>
                    <div className="mt-1 text-xl font-semibold text-white">
                      {" "}
                      <Counter target={parseInt(views.replace(/,/g, ""))} />
                    </div>
                  </div>

               

                  <div className="rounded-lg border border-gray-800 bg-gray-900/70 p-4 hover:border-purple-500/30 transition">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-gray-300" />
                      <span className="text-sm text-gray-400">Joined</span>
                    </div>
                    <div className="mt-1 text-xl font-semibold text-white">
                      {joined}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 ">
                  {/* Projects */}
                  <div className="group relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-500/10 opacity-80" />
                    <div className="relative p-5 rounded-xl border border-indigo-500/20 bg-gray-900/70 shadow-lg group-hover:shadow-indigo-500/20 transition">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">Projects</div>
                        <Briefcase className="h-5 w-5 text-indigo-300" />
                      </div>
                      <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">
                        {profile.projects}
                      </div>
                      <div className="text-[12px] text-gray-400">
                        Delivered & maintained
                      </div>
                    </div>
                  </div>
                  {/* Purchases */}
                  <div className="group relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-fuchsia-500/10 opacity-80" />
                    <div className="relative p-5 rounded-xl border border-purple-500/20 bg-gray-900/70 shadow-lg group-hover:shadow-purple-500/20 transition">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">Purchases</div>
                        <ShoppingBag className="h-5 w-5 text-purple-300" />
                      </div>
                      <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">
                        <Counter
                          target={parseInt(purchases.replace(/,/g, ""))}
                        />
                      </div>
                      <div className="text-[12px] text-gray-400">
                        Total successful engagements
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="group relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-500/10 opacity-80" />
                    <div className="relative p-5 rounded-xl border border-emerald-500/20 bg-gray-900/70 shadow-lg group-hover:shadow-emerald-500/20 transition">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">Experience</div>
                        <Award className="h-5 w-5 text-emerald-300" />
                      </div>
                      <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">
                        {profile.experience}
                      </div>
                      <div className="text-[12px] text-gray-400">
                        Industry expertise
                      </div>
                    </div>
                  </div>
                </div>

              
              </div>

           

              {/* RIGHT */}
 <div className="w-full md:w-[22rem] flex flex-col items-center gap-6">
  <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl border border-gray-800">
    <Image
      src={profile.image || "/placeholder.svg"}
      alt={profile.name}
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Contacts */}
  <div className="flex flex-col w-full gap-3 ">
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 px-3 py-1.5 rounded-full bg-green-600 text-white text-sm hover:opacity-90"
    >
      <MessageCircle className="h-3 w-3" /> WhatsApp
    </a>
    <a
      href="https://twitter.com/yourhandle"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-sky-600 text-white text-sm hover:opacity-90"
    >
      <Twitter className="h-3 w-3" /> X/Twitter
    </a>
    <a
      href="https://linkedin.com/in/yourhandle"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-blue-700 text-white text-sm hover:opacity-90"
    >
      <Linkedin className="h-3 w-3" /> LinkedIn
    </a>
    <a
      href="https://github.com/yourhandle"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-gray-700 text-white text-sm hover:opacity-90"
    >
      <Github className="h-3 w-3" /> GitHub
    </a>
  </div>
</div> 

            </div>
          </div>
        </section>


          <div className="mt-10">
          {/* <Workflows agent={agent!} /> */}
       {agent ? <Workflows agent={agent} /> : null}

        </div>

        {/* ============ REVIEWS / REMARKS (dark) ============ */}
        <section className="mt-10 bg-gray-900 rounded-xl shadow border border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <h3 className="text-2xl font-semibold text-white">
              Ratings & Reviews
            </h3>
            <p className="text-sm text-purple-300 mt-1">
              Real feedback from clients who hired {profile.name}.
            </p>
          </div>

          {/* review list */}
          <div className="divide-y divide-gray-800">
            {[
              {
                user: "John D.",
                date: "Sep 2025",
                stars: 5,
                txt: "Shipped a production-ready API with tests. Clear communication.",
              },
              {
                user: "Sarah L.",
                date: "Aug 2025",
                stars: 4,
                txt: "Frontend revamp was great. Minor delays but quality was top-notch.",
              },
              {
                user: "Akash P.",
                date: "Jun 2025",
                stars: 5,
                txt: "Security review was excellent. Found critical issues early.",
              },
            ].map((r, idx) => (
              <div
                key={idx}
                className="p-6 flex flex-col sm:flex-row gap-4 sm:items-start"
              >
                {/* avatar */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-200 font-semibold">
                  {r.user
                    .split(" ")
                    .map((s) => s[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="font-medium text-white">{r.user}</div>
                    <span className="text-xs text-gray-500">• {r.date}</span>
                    <span
                      className="text-amber-400 ml-2"
                      aria-label={`${r.stars} stars`}
                    >
                      {"★".repeat(r.stars)}
                      {"☆".repeat(5 - r.stars)}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-300">{r.txt}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    className="h-8 px-3 text-xs border-gray-700 text-purple-400 hover:bg-gray-800"
                  >
                    Helpful
                  </Button>
                  <Button
                    variant="ghost"
                    className="h-8 px-3 text-xs text-red-400 hover:bg-gray-900"
                  >
                    Report
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* write a review */}
          <div className="p-6 border-t border-gray-800">
            <form className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">Your rating:</span>
                <div
                  className="text-amber-400 text-xl"
                  aria-label="rate out of 5"
                >
                  ☆☆☆☆☆
                </div>
              </div>
              <textarea
                className="w-full border border-gray-800 rounded-lg p-3 bg-gray-900 text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                rows={4}
                placeholder="Share your experience…"
              />
              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Post Review
                  
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="border-gray-700 text-gray-200 hover:bg-gray-900"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </section>

       
        {/* <section className="mt-12 bg-gray-900 rounded-xl shadow border border-gray-800 p-6">
          <h3 className="text-2xl font-semibold mb-2 text-white">
            Request a Custom Modification
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Provide details about your requirement—technology stack, deadline,
            budget, and desired outcome.
          </p>

          {/* <CustomRequestForm /> 
        </section>*/}
      </div>
    </main>
  );
}
