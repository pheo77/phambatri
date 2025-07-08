import { CloudSunIcon, CompassIcon, MapPinIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const NavigationMenuSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    {
      id: "weather",
      icon: <CloudSunIcon className="h-[50px] w-[50px] text-white" />,
      label: "weather",
      active: false,
      imgSrc: "/176-179-293-299-353.svg",
    },
    {
      id: "explore",
      icon: <CompassIcon className="h-[50px] w-[50px] text-white" />,
      label: "explore",
      active: false,
      imgSrc: "/solid-navigation-explore.png",
    },
    {
      id: "plan",
      icon: null,
      label: "plan",
      active: true,
      imgSrc: "/subtract.svg",
    },
    {
      id: "sos",
      icon: <MapPinIcon className="h-[50px] w-[50px] text-white" />,
      label: "SOS",
      active: false,
      imgSrc: "/solid-navigation-location.png",
    },
  ];

  return (
    <nav className="flex flex-col items-center w-[100px] h-[537px] bg-[#deab4d] rounded-[40px] py-5 px-1">
      <Avatar className="w-[60px] h-[60px] mb-[72px]">
        <AvatarImage
          src="/ellipse-33.png"
          alt="Profile"
          className="object-cover"
        />
        <AvatarFallback>User</AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-center gap-[26px]">
        {navItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center w-[87px]">
            {item.id === "plan" ? (
              <div className="flex flex-col items-center">
                <div className="w-10 h-9 flex items-center justify-center">
                  <img
                    className="w-[27px] h-[29px]"
                    alt="Plan icon"
                    src="/subtract.svg"
                  />
                </div>
                <div className="w-[85px] h-4 mt-2 font-semibold text-[#7c2222] text-sm text-center whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            ) : (
              <Button
                variant="ghost"
                className="flex flex-col items-center p-0 h-auto bg-transparent hover:bg-transparent"
              >
                {item.icon ? (
                  item.icon
                ) : (
                  <img
                    className="w-[50px] h-[50px]"
                    alt={`${item.label} icon`}
                    src={item.imgSrc}
                  />
                )}
                <div className="w-[85px] h-4 mt-2 font-semibold text-white text-sm text-center whitespace-nowrap">
                  {item.label}
                </div>
              </Button>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
