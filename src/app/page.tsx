import StatsCardsGrid from "@/components/dashboard/StatsCardsGrid";
import TaskCompletionChart from "@/components/dashboard/TaskCompletionChart";

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

    </>
  );
}
