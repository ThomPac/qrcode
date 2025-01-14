"use client"; // Nécessaire pour utiliser les hooks côté client

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      router.push("/mobile");
    } else {
      router.push("/pc");
    }
  }, [router]);

  return <p>Redirecting...</p>; // Message temporaire
}
