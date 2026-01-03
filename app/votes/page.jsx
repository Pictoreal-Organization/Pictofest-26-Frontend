"use client";

import { useEffect, useState } from "react";
import api from "@/app/api";
import VotedEntrySection from "@/app/components/VotedEntrySection";
import isNotAuth from "../components/isNotAuth";

const Votes = () => {
  const [votedEntries, setVotedEntries] = useState([]);
  const [isVoted, setIsVoted] = useState(false);

  const getVotedEntries = async () => {
    try {
      const response = await api.get("/voting/");
      setVotedEntries(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getVotingStatus = async () => {
    try {
      const response = await api.get("/voting/status");
      if (!response.data.data) {
        setIsVoted(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sections = [
    {
      title: "Painting/Sketching",
      code: "PS",
    },
    {
      title: "Digital Art",
      code: "DA",
    },
    {
      title: "Photography",
      code: "PH",
    },
    {
      title: "Craft",
      code: "CR",
    },
    {
      title: "Theme Category",
      code: "TH",
    },
  ];

  useEffect(() => {
    getVotingStatus();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getVotedEntries();
  }, [isVoted]);

  return (
    <main className="bg-[url('/img/events/website_cream.png')] min-h-dvh px-4">
      <div className="flex flex-col justify-center items-center gap-10 lg:py-14 py-8 max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 heading-font text-center">
          My Votes
        </h1>
        {isVoted ? (
          sections.map((section) => (
            <VotedEntrySection
              key={section.code}
              section={section}
              votedEntries={votedEntries}
            />
          ))
        ) : (
          <h2 className="text-2xl text-center text-red-500 font-extrabold">
            *You haven't voted yet. As a result, there are no votes to display.
            Please participate in the voting process to view your votes.
          </h2>
        )}
      </div>
    </main>
  );
};

export default isNotAuth(Votes);
