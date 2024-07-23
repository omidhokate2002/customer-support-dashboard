import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListCheckIcon, PieChart, StarIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import cm from "@/public/cm.jpg";
import rl from "@/public/rl.jpg";
import tf from "@/public/tf.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import TeamDistributionCharts from "./team-distribution-charts";
import SupportTicketResolved from "./supports-tickets-resolved";

const teamLeaders = [
  {
    firstName: "Colin",
    lastName: "Murray",
    avatar: cm,
  },
  {
    firstName: "Tom",
    lastName: "Phillips",
  },
  {
    firstName: "Liam",
    lastName: "Fuentes",
  },
  {
    firstName: "Tina",
    lastName: "Fey",
    avatar: tf,
  },
  {
    firstName: "Katie",
    lastName: "Johnson",
  },
  {
    firstName: "Tina",
    lastName: "Jones",
  },
  {
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    firstName: "Ryan",
    lastName: "Lopez",
    avatar: rl,
  },
  {
    firstName: "Jenny",
    lastName: "Jones",
  },
];

export default function TeamsStats() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <span className="text-5xl font-bold">8</span>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/teams">View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center justify-between">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider
                key={`${teamLeader.firstName}${teamLeader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!teamLeader.avatar && (
                        <Image
                          src={teamLeader.avatar}
                          alt={`${teamLeader.firstName} ${teamLeader.lastName} avatar`}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center justify-between">
              <span>Team distribution</span>
              <PieChart />
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <TeamDistributionCharts />
          </CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className=" text-lg flex gap-2 items-center">
            <ListCheckIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <SupportTicketResolved />
        </CardContent>
      </Card>
    </>
  );
}
