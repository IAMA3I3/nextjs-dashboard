import { CircularProgress } from "@mui/material";

export default function Loading() {

    return (
        <div className=" h-full flex-1 flex justify-center items-center flex-col">
            <CircularProgress />
        </div>
    )
}