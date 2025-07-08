import { EyeIcon, LeafIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const ActivitiesSection = (): JSX.Element => {
  // Tree card data
  const treeCards = [
    { id: 1, position: 54 },
    { id: 2, position: 243 },
    { id: 3, position: 431 },
    { id: 4, position: 620 },
  ];

  // Stats data
  const carbonStats = [
    { label: "Lifetime CO2 offset", value: "140kg" },
    { label: "Yearly CO2 offset", value: "14.00kg/year" },
    { label: "CO2 offset period", value: "0 years - 10 years" },
    { label: "Productivity period", value: "0 years - 40 years" },
    { label: "Average natural life span", value: "150 years" },
  ];

  const plantingStats = [
    { label: "Planted Trees", value: "752" },
    { label: "Planted Locations", value: "Vaki/Singhad, Gangatirtha" },
    { label: "Care giver team", value: "Team Ozon" },
    { label: "Team Leader", value: "Mayantha Dias" },
  ];

  return (
    <section className="relative w-full rounded-[40px] bg-[#deab4d] p-12 overflow-hidden">
      <div className="flex flex-wrap gap-4 mb-6">
        {treeCards.map((card) => (
          <Card
            key={card.id}
            className="w-[159px] bg-[#e8b8003d] rounded-[20px] border border-solid border-[#7c5b045e] overflow-hidden"
          >
            <div className="relative">
              <div className="w-full h-[141px] bg-[#8e9a5a80] rounded-[15px_15px_0px_0px] overflow-hidden border-2 border-solid border-[#25532e]">
                <div className="relative w-full h-[139px] bg-[url(/screenshot-2024-02-23-095506-1-3.png)] bg-cover bg-center">
                  <div className="absolute top-[5px] right-[5px] w-[15px] h-[15px] bg-[url(/clip-path-group.png)] bg-cover" />
                </div>
              </div>
            </div>

            <CardContent className="p-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="[font-family:'SF_Compact_Rounded-Bold',Helvetica] font-bold text-[#113f24] text-xs">
                    Teak Tree
                  </h3>
                  <p className="[font-family:'SF_Compact_Rounded-Regular',Helvetica] font-normal text-[#7c5b04] text-[8px]">
                    (Tectona grandis)
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center">
                <p className="[font-family:'SF_Compact_Rounded-Bold',Helvetica] font-bold text-[#7c5b04] text-xs">
                  Rs.1000.00
                </p>
                <div className="flex ml-auto gap-2">
                  <Badge className="w-[15px] h-3 p-0 flex items-center justify-center bg-[#1abc6438]">
                    <LeafIcon className="w-3 h-2.5" />
                  </Badge>
                  <Badge className="w-[15px] h-3 p-0 flex items-center justify-center bg-[#3c240075]">
                    <EyeIcon className="w-3 h-2.5" />
                  </Badge>
                </div>
              </div>

              <p className="mt-2 [font-family:'SF_Compact_Rounded-Regular',Helvetica] text-[10px]">
                It is a large, deciduous tree that occurs in mixed hardwood
                forests. Tectona grandis has small, fragrant white flowers
                arranged
                <span className="text-[#2300ff]">..........</span>
              </p>
            </CardContent>

            <CardFooter className="flex justify-center pb-3 pt-0">
              <Button
                variant="outline"
                size="sm"
                className="h-[13px] w-[63px] bg-[#eee8b3] rounded-sm border-[0.5px] border-solid border-[#7c5b047a] [font-family:'SF_Compact_Rounded-Bold',Helvetica] font-bold text-[#113f24] text-[10px] p-0"
              >
                More Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <Card className="flex-1 bg-[#eee8b3] rounded-[20px] border border-solid border-[#7c5b045e]">
          <CardContent className="p-4">
            {carbonStats.map((stat, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <span className="[font-family:'SF_Compact_Rounded-Regular',Helvetica] text-sm">
                  {stat.label}
                </span>
                <span className="[font-family:'SF_Compact_Rounded-Bold',Helvetica] font-bold text-sm">
                  {stat.value}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="flex-1 bg-[#eee8b3] rounded-[20px] border border-solid border-[#7c5b045e]">
          <CardContent className="p-4">
            {plantingStats.map((stat, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <span className="[font-family:'SF_Compact_Rounded-Regular',Helvetica] text-sm">
                  {stat.label}
                </span>
                <div className="flex items-center">
                  {stat.label === "Planted Trees" && (
                    <span className="mr-1">🌳</span>
                  )}
                  <span className="[font-family:'SF_Compact_Rounded-Bold',Helvetica] font-bold text-sm">
                    {stat.value}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
