import { ArrowRight, Check } from "lucide-react";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import DiscordHomeButton from "./discordHomeButton";

const HomeTitle = ({ user }: { user: any }) => {
  return (
    <>
      <MaxWidthWrapper className="">
        <div className="flex flex-col gap-12 py-12 md:py-20">
          <div className="flex flex-col gap-8 items-center">
            <div className="text-3xl sm:text-5xl">
              <h1 className="font-semibold tracking-tight text-center">
                Real-Time SaaS Insights,
              </h1>
              <h1 className="font-semibold text-brand-700">
                Delivered to Your Discord
              </h1>
            </div>

            <div className="max-w-lg">
              <p className="text-sm tracking-tighter text-center text-gray-500 font-medium">
                PandaPulse is the easiest way to monitor your SaaS. Get instant
                notifications for{" "}
                <span className="text-gray-700">
                  sales, new users, or any other event
                </span>{" "}
                sent directly to your Discord
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex gap-2 text-gray-500 text-sm items-center">
                <Check className="text-brand-600 h-5 w-5" />
                Real time Discord alerts for critical events
              </div>
              <div className="flex gap-2 text-gray-500 text-sm items-center">
                <Check className="text-brand-600 h-5 w-5" />
                Buy once, use forever
              </div>
              <div className="flex gap-2 text-gray-500 text-sm items-center">
                <Check className="text-brand-600 h-5 w-5" />
                Track sales, new users or any other event
              </div>
            </div>
            <div className="flex  justify-center w-full">
              <div className="hover:border-[2px] rounded-md hover:border-brand-700 hover:p-[2px] max-h-10">
                <DiscordHomeButton className="flex gap-2" user={user}>
                  <ArrowRight className="h-5 w-5" />
                </DiscordHomeButton>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default HomeTitle;
