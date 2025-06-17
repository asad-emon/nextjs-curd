"use client"
import { useGlobalContext } from "@/contexts/global-context"
import { useEffect } from "react";

const Alert = () => {
    const { alert, closeAlert } = useGlobalContext();
    const severityClassName = (severity) => {
        switch (severity) {
            case "info":
                return "bg-blue-700 border-blue-400";
            case "success":
                return "bg-green-700 border-green-400";
            case "error":
                return "bg-red-700 border-red-400";
        }
    }
    useEffect(() => {
        if (alert.open) {
            let timeout = setTimeout(() => { closeAlert() }, 5000);
        }
    }, [alert]);
    return (
        alert.open &&
        <div className={`${severityClassName(alert.severity)} text-white border min-w-80 px-4 py-3 rounded fixed bottom-5 right-5 flex gap-2 justify-between items-center`} role="alert">
            <span className="">{alert.message}</span>
            <span className="" onClick={closeAlert}>
                <svg className="fill-current h-6 w-6 " role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
        </div>
    )
}

export default Alert;