type StatsCardProps = {
  title: string;
  value: number;
};

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className=" w-full p-8 rounded-xl shadow-lg bg-linear-60 from-black/15 dark:from-white/20 via-black/10 dark:via-white/30 to-black/15 dark:to-white/20">
      <p className="text-sm text-muted">
        {title}
      </p>
      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}
