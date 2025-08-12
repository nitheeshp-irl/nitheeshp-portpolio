import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import HeaderNav from "./HeaderNav";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-slate-800">
      <HeaderNav />

      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6 text-animate-gradient">Get in Touch</h1>
        <p className="text-lg mb-12 text-gradient-warm">
          Whether you have a question, want to collaborate, or just want to say
          hi — I’d love to hear from you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Email */}
          <a
            href="mailto:nitheeshp@outlook.com"
            className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition group"
          >
            <FaEnvelope className="text-indigo-500 text-4xl mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-gradient">Email</span>
            <span className="text-sm text-slate-500 break-all">
              nitheeshp@outlook.com
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nitheeshp/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition group"
          >
            <FaLinkedin className="text-blue-600 text-4xl mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-gradient">LinkedIn</span>
            <span className="text-sm text-slate-500">View Profile</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/nitheeshp-irl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition group"
          >
            <FaGithub className="text-gray-800 text-4xl mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-gradient">GitHub</span>
            <span className="text-sm text-slate-500">View Projects</span>
          </a>
        </div>
      </div>
    </div>
  );
}
