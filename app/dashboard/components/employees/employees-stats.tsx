import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import cm from "@/public/cm.jpg";
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WorkLocationTrends from "./work-location-trends";

export default function EmployeesStats() {
  const totalEmployees = 100;
  const employeesPresent = 80;
  const employeesPresentByPercentage =
    (employeesPresent / totalEmployees) * 100;

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <span className="text-5xl font-bold">{totalEmployees}</span>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/employees">View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employees present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              {employeesPresentByPercentage > 75 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundXIcon />
              )}
              <span className="text-5xl font-bold">{employeesPresent}</span>
            </div>
          </CardContent>
          <CardFooter>
            {employeesPresentByPercentage > 75 ? (
              <span className="text-xs text-green-500 flex gap-2 items-center">
                <BadgeCheckIcon />
                {employeesPresentByPercentage}% of employees aer present
              </span>
            ) : (
              <span className="text-xs text-red-500 flex gap-2 items-center">
                <AlertTriangleIcon />
                Only {employeesPresentByPercentage}% of employees aer present
              </span>
            )}
          </CardFooter>
        </Card>
        <Card className="border-pink-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base"> Employees of the month</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <Image src={cm} alt="Employee of the month avatar" />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Colin Murray!</span>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground flex gap-2 items-center mt-auto">
            <PartyPopperIcon className="text-pink-500" />
            <span>Congratulations, Colin!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className=" text-lg flex gap-2 items-center">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}
