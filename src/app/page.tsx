import BasicCard from "@/components/dashboard/BasicCard";
import RecentTasks from "@/components/dashboard/RecentTasks";
import StatsCardsGrid from "@/components/dashboard/StatsCardsGrid";
import TaskCompletionChart from "@/components/dashboard/TaskCompletionChart";
import Link from "next/link";

export default function DashboardPage() {

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">
        Dashboard Overview
      </h2>
      <StatsCardsGrid />
      <div className="mt-8">
        <TaskCompletionChart />
      </div>
      <div className=" mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
        <RecentTasks />
        <BasicCard>
          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Quick Links
          </h3>
          <div className=" space-y-4">
            <Link href={"/tasks/create"} className=" block py-2 px-6 text-sm font-semibold rounded bg-black/10 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/15">Add Task</Link>
            <Link href={"/projects/create"} className=" block py-2 px-6 text-sm font-semibold rounded bg-black/10 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/15">Add Project</Link>
            <Link href={"/tasks"} className=" block py-2 px-6 text-sm font-semibold rounded bg-black/10 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/15">Tasks</Link>
            <Link href={"/projects"} className=" block py-2 px-6 text-sm font-semibold rounded bg-black/10 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/15">Projects</Link>
          </div>
        </BasicCard>
      </div>
    </>
  );
}
