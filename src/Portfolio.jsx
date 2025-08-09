import React from "react";
import { profile } from "./profile";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-blue-900 text-white p-6">
        <div className="flex items-center space-x-4">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-20 h-20 rounded-full border-4 border-white"
          />
          <div>
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <p className="text-lg">{profile.title}</p>
          </div>
        </div>
      </header>

      <main className="p-6">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>{profile.bio}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-4">
            {profile.projects.map((project, idx) => (
              <li key={idx} className="border p-4 rounded-lg hover:shadow-lg">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-bold text-lg hover:underline"
                >
                  {project.name}
                </a>
                <p className="text-gray-700">{project.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="bg-gray-200 text-center p-4 mt-10">
        <p>Connect with me:</p>
        <a href={profile.links.linkedin} className="text-blue-700 mx-2">LinkedIn</a>
        <a href={profile.links.github} className="text-blue-700 mx-2">GitHub</a>
        <a href={profile.links.freecodecamp} className="text-blue-700 mx-2">FreeCodeCamp</a>
      </footer>
    </div>
  );
}
