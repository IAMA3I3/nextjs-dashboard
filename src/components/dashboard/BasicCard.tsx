export default function BasicCard({ children }: { children: React.ReactNode }) {
    return (
        <div className=" w-full p-8 rounded-xl shadow-lg bg-white dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-800">
            {children}
        </div>
    )
}