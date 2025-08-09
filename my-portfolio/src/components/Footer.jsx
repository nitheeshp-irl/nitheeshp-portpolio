import React from "react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-xs text-slate-600">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  );
}
