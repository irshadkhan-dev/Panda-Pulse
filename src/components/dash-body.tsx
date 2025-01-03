"use client";
import React from "react";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import DashEvents from "./dash-events";
import DashHome from "./dash-home";

import { GetAllCategory } from "@/lib/actions/user.actions";

const DashboardBody: React.FC = () => {
  const {
    isPending,
    isError,

    data: categoryData,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await GetAllCategory(),
    select: (data: any) => data?.categoryTable || [],
    refetchOnWindowFocus: true,
  });

  const LoadingSpinner = () => (
    <div className="w-full bg-white/5 backdrop-blur-lg transition-all z-[100] h-[70vh] flex items-center justify-center border border-gray-200 rounded-lg">
      <Loader2 className="animate-spin w-10 h-10 text-brand-700" />
    </div>
  );

  const ErrorDisplay = () => {
    return (
      <div className="w-full h-[70vh] flex items-center justify-center text-red-500">
        <p>Error loading dashboard. Please refresh or try again later.</p>
      </div>
    );
  };

  if (isPending) return <LoadingSpinner />;

  if (isError) return <ErrorDisplay />;

  if (!categoryData || categoryData.length === 0) {
    return <DashHome />;
  }

  return (
    <div className="w-full h-[70vh] md:py-10 overflow-x-scroll">
      <DashEvents data={categoryData} />
    </div>
  );
};

export default DashboardBody;
