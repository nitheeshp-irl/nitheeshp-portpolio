import React from "react";
import { profile } from "../data/profile";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer id="contact" className="py-14 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-700">
          Reach me at{" "}
          <a href={profile.email} className="text-sky-700 underline underline-offset-4">Email</a>{" "}
          ·{" "}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-4">LinkedIn</a>{" "}
          ·{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-4">GitHub</a>
        </p>
        <div className="mt-4 flex items-center justify-center gap-5 text-xl text-slate-700">
          <a href={profile.email} aria-label="Email"><HiOutlineMail /></a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><SiGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><SiLinkedin /></a>
        </div>
        <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
