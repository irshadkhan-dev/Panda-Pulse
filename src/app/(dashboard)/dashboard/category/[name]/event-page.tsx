"use client";
import { useQuery } from "@tanstack/react-query";

import React from "react";
import EmptyEventPage from "./emptyEventPage";
import LoadedEventPage from "./loadedEventPage";
import { Loader2 } from "lucide-react";
import { GetAllEvents } from "@/lib/actions/user.actions";

const EventPage = ({
  eventName,
}: {
  eventName: "sale" | "signup" | "revenue";
}) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["category"],
    queryFn: async () => await GetAllEvents(eventName),
  });

  if (isError) {
    return <div className="error-message">Something went wrong</div>;
  }

  if (isPending)
    return (
      <div className="w-full bg-white/5 backdrop-blur-lg transition-all z-[100] h-full flex items-center justify-center border border-gray-200 rounded-lg">
        <Loader2 className="animate-spin w-10 h-10 text-brand-700" />
      </div>
    );

  return (
    <div className="w-full md:px-5 h-screen overflow-scroll">
      {data && data.length === 0 ? (
        <>
          <EmptyEventPage />
        </>
      ) : (
        <LoadedEventPage tableData={data!} eventName={eventName} />
      )}
    </div>
  );
};

export default EventPage;
