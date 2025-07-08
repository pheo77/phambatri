import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { ActivitiesSection } from "./sections/ActivitiesSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection";

export const Plan = (): JSX.Element => {
  // CO2 offset data
  const co2OffsetData = [
    {
      label: "Lifetime CO2 offset",
      value: "140Kg",
      icon: "/---icon--info-circle-.png",
    },
    { label: "Yearly CO2 offset", value: "14.00Kg / year" },
    { label: "CO2 offset period", value: "0 years - 10 years" },
    { label: "Productivity period", value: "0 years - 40 years" },
    { label: "Average natural life span", value: "150 years" },
  ];

  // Planted trees data
  const plantedTreesData = [
    { label: "Planted Trees", value: "752", icon: "/group.png" },
    {
      label: "Planted Locations",
      value: "Yala / Singharaja / Gampaha(Hora kale)",
    },
    { label: "Care giver team", value: "Team Ozon" },
    { label: "Team Leader", value: "Mayantha Dias", hasContact: true },
  ];

  return (
    <div className="bg-[#d69e36] flex flex-row justify-center w-full">
      <div className="bg-[#d69e36] w-[1440px] relative">
        <header className="flex items-center gap-[5px] absolute top-[51px] left-[97px]">
          <img
            className="w-[30px] h-[30px]"
            alt="Location icon"
            src="/frame-3.svg"
          />
          <div className="[font-family:'Inter',Helvetica] font-medium text-white text-2xl">
            Đà Nẵng
          </div>
          <img className="h-[30px]" alt="Dropdown icon" src="/frame.svg" />
        </header>

        <NavigationMenuSection />

        <div className="flex flex-row gap-6 absolute top-[393px] left-[204px]">
          <div className="w-[814px] rounded-[40px]">
            <ActivitiesSection />

            {/* CO2 Offset Card */}
            <Card className="w-[250px] h-[181px] absolute top-[340px] left-[84px] rounded-[15px] overflow-hidden border-2 border-solid border-[#113f2487] bg-[linear-gradient(180deg,rgba(51,225,131,0.2)_0%,rgba(250,198,0,0.2)_100%)]">
              <CardContent className="p-0">
                <img
                  className="absolute w-[15px] h-3.5 top-[11px] right-[15px]"
                  alt="Icon cloud"
                  src="/---icon--cloud-.png"
                />

                {co2OffsetData.map((item, index) => (
                  <div
                    key={`co2-${index}`}
                    className="flex justify-between absolute left-5 right-5"
                    style={{ top: `${2.5 + index * 36}px` }}
                  >
                    <div className="[font-family:'SF_Compact_Rounded-Bold',Helvetica] font-bold text-black text-[10px] tracking-[0.40px] leading-[18px] whitespace-nowrap flex items-center">
                      {item.label} :
                      {item.icon && (
                        <img
                          className="w-[7px] h-[9px] ml-1"
                          alt="Info icon"
                          src={item.icon}
                        />
                      )}
                    </div>
                    <div className="[font-family:'SF_Compact_Rounded-Regular',Helvetica] font-normal text-black text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                      {item.value}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Planted Trees Card */}
            <Card className="w-[250px] h-[179px] absolute top-[333px] left-[446px] rounded-[15px] overflow-hidden border-2 border-solid border-[#113f2487] bg-[linear-gradient(180deg,rgba(250,198,0,0.2)_0%,rgba(51,225,131,0.2)_100%)]">
              <CardContent className="p-0">
                {plantedTreesData.map((item, index) => (
                  <div
                    key={`tree-${index}`}
                    className="flex justify-between absolute left-5 right-5"
                    style={{
                      top: `${2.5 + index * (index === 0 ? 44 : 46)}px`,
                    }}
                  >
                    <div className="[font-family:'SF_Compact_Rounded-Bold',Helvetica] font-bold text-black text-[10px] tracking-[0.40px] leading-[18px] whitespace-nowrap">
                      {item.label} :
                    </div>
                    <div className="[font-family:'SF_Compact_Rounded-Regular',Helvetica] font-normal text-black text-xs tracking-[0] leading-[18px] whitespace-nowrap flex items-center">
                      {index === 0 ? (
                        <div className="flex items-center">
                          <span className="text-[#113f24] text-2xl">
                            {item.value}
                          </span>
                          {item.icon && (
                            <img
                              className="w-[17px] h-5 ml-1"
                              alt="Tree icon"
                              src={item.icon}
                            />
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center">
                          {item.value}
                          {item.hasContact && (
                            <span className="ml-1 [font-family:'SF_Compact_Rounded-Regular',Helvetica] font-normal text-[#2300ff] text-[8px] tracking-[0.32px] leading-[18px] underline">
                              contact
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Map Card */}
          <Card className="w-80 h-[525px] absolute top-[399px] left-[1082px] bg-white rounded-[15px] overflow-hidden p-0">
            <CardContent className="p-0 relative h-[525px]">
              <div className="absolute w-2.5 h-3.5 top-40 left-[163px]">
                <img
                  className="absolute w-[25px] h-[116px] top-0 left-0"
                  alt="Frame"
                  src="/frame-8-4.svg"
                />
              </div>

              <div className="absolute w-2.5 h-3.5 top-[93px] left-[186px]">
                <div className="relative w-[23px] h-[31px] -top-1.5 -left-1.5 bg-[url(/frame-8.svg)] bg-[100%_100%]">
                  <div className="relative w-2.5 h-3.5 top-1.5 left-1.5">
                    <img
                      className="absolute w-20 h-[137px] top-0 left-0"
                      alt="Frame"
                      src="/frame-8-10.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute w-2.5 h-3.5 top-[95px] left-40">
                <div className="relative w-[23px] h-[31px] -top-1.5 -left-1.5 bg-[url(/frame-8.svg)] bg-[100%_100%]">
                  <div className="relative w-2.5 h-3.5 top-1.5 left-1.5">
                    <img
                      className="absolute w-[23px] h-[31px] -top-1.5 -left-1.5"
                      alt="Frame"
                      src="/frame-8.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute w-2.5 h-3.5 top-[115px] left-[125px]">
                <div className="relative w-[23px] h-[31px] -top-1.5 -left-1.5 bg-[url(/frame-8.svg)] bg-[100%_100%]">
                  <div className="relative w-2.5 h-3.5 top-1.5 left-1.5">
                    <img
                      className="absolute w-[23px] h-[31px] -top-1.5 -left-1.5"
                      alt="Frame"
                      src="/frame-8.svg"
                    />
                  </div>
                </div>
              </div>

              <img
                className="absolute w-80 h-[525px] top-0 left-0 object-cover"
                alt="Map"
                src="/image-1.png"
              />

              <img
                className="absolute w-[23px] h-[31px] top-[252px] left-[167px]"
                alt="Frame"
                src="/frame-8.svg"
              />

              <div className="absolute w-2.5 h-3.5 top-[389px] left-[254px]">
                <div className="relative w-[23px] h-[31px] -top-1.5 -left-1.5 bg-[url(/vector.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[9px] h-[13px] top-1.5 left-[7px]"
                    alt="Vector"
                    src="/vector-1.svg"
                  />

                  <img
                    className="absolute w-[23px] h-[31px] top-0 left-0"
                    alt="Frame"
                    src="/frame-8.svg"
                  />

                  <div className="absolute w-2.5 h-3.5 top-1.5 left-1.5">
                    <img
                      className="absolute w-[23px] h-[31px] top-[-229px] left-[-147px]"
                      alt="Vector"
                      src="/vector.svg"
                    />

                    <div className="absolute w-2.5 h-3.5 top-0 left-0">
                      <img
                        className="absolute w-[9px] h-[13px] top-0 left-0"
                        alt="Vector"
                        src="/vector-1.svg"
                      />

                      <div className="absolute w-2.5 h-3.5 top-0 left-0">
                        <img
                          className="absolute w-[23px] h-[31px] top-[52px] left-[30px]"
                          alt="Vector"
                          src="/vector.svg"
                        />

                        <img
                          className="absolute w-[9px] h-[13px] top-0 left-0"
                          alt="Vector"
                          src="/vector-1.svg"
                        />

                        <img
                          className="absolute w-[23px] h-[31px] top-10 left-[-108px]"
                          alt="Frame"
                          src="/frame-8.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-2.5 h-3.5 top-1.5 left-1.5">
                    <img
                      className="absolute w-[23px] h-[31px] top-[-88px] left-0.5"
                      alt="Vector"
                      src="/vector.svg"
                    />

                    <img
                      className="absolute w-[9px] h-[13px] top-0 left-0"
                      alt="Vector"
                      src="/vector-1.svg"
                    />

                    <img
                      className="absolute w-[23px] h-[31px] top-[-52px] left-[-124px]"
                      alt="Frame"
                      src="/frame-8.svg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
