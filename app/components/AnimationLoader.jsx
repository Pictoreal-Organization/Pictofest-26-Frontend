"use client";

import Lottie from "lottie-react";
import { useState, useEffect } from "react";

export default function AnimationLoader() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    console.log("AnimationLoader mounted");
    // Fetch the animation JSON from the public folder
    fetch("/animation.json")
      .then((res) => {
        if (!res.ok) {
           throw new Error(`Failed to load animation: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Animation data loaded successfully");
        setAnimationData(data);
      })
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  if (!animationData) {
      console.log("AnimationLoader: waiting for data...");
      // Return a temporary visible placeholder to confirm the component is rendering
      return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80">
           <div className="text-black">Loading...</div>
        </div>
      );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="w-1/2 md:w-1/3 lg:w-1/4 max-w-[300px] aspect-square">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
}
