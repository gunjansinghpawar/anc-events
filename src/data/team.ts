/* ─────────────────────────────────────────────
   ANC Events — Team Data
   
   Only include verified team members.
   Do not fabricate bios or roles.
   ───────────────────────────────────────────── */

import { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "team-001",
    name: "Ashish Nahata",
    role: "Founder & Director",
    bio: "With years of experience in conceptualising and executing large-scale celebrations, Ashish leads ANC Events with a focus on ambitious ideas and meticulous execution. His approach combines creative vision with operational precision, ensuring that every event is delivered to the highest standard.",
    portrait: undefined,
  },
  {
    id: "team-002",
    name: "Anushka Nahata",
    role: "Director",
    bio: "Anushka brings a refined design sensibility and deep understanding of hospitality to ANC Events. Her attention to aesthetic detail and guest experience shapes the distinctive character of every ANC celebration.",
    portrait: undefined,
  },
];

/* ── Content API ─────────────────────────── */

export function getAllTeamMembers(): TeamMember[] {
  return teamMembers;
}
