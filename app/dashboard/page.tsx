import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeesStats from "./components/employees/employees-stats";
import TeamsStats from "./components/teams/teams-stats";

export default function DashboardPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="employees">Employees Stats</TabsTrigger>
        <TabsTrigger value="teams">Teams Stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>
      <TabsContent value="teams">
        <TeamsStats />
      </TabsContent>
    </Tabs>
  );
}
