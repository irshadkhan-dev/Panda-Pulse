import Link from "next/link";
import React from "react";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { auth } from "../auth";
import DiscordHomeButton from "./discordHomeButton";

import SignOutBtn from "./signOutBtn";

const Navbar = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="border-b border-gray-200 w-full flex h-14 backdrop-blur-lg bg-white/75 sticky top-0 transition-all z-[100]">
      <MaxWidthWrapper className="flex items-center">
        <div className="flex justify-between items-center w-full">
          <Link href={"/"}>
            <div className="flex text-base font-medium">
              <span className="text-brand-700">Panda</span>Pulse
            </div>
          </Link>

          <div className="flex justify-between gap-2 items-center px-5 ">
            <div>
              {user ? (
                <>
                  <SignOutBtn />
                </>
              ) : (
                <>
                  <Link href={"/pricing"} className="text-gray-500 text-sm">
                    Pricing
                  </Link>
                </>
              )}
            </div>
            <div className="w-[1px] h-7 bg-gray-400" />
            <div>
              <DiscordHomeButton btnType="nav" user={user}></DiscordHomeButton>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
