"use client"
import Image from "next/image"
import Link from "next/link"
import { dateToYMD } from "@/lib/helper"
import Accordion from "@/components/ui/accordion"
import api from "@/lib/api-client"
import { useMemo } from "react"

export function UserCard({ user, onDeleteUser }) {
    const userData = useMemo(()=>{
        return user;
    },[]);
    const profilePicture = userData.profilePicture ?? "/images/avatar.jpg";

    async function onClickDeleteButton(userId) {
        if (window.confirm("Do you really want to delete this user?")) {
            const response = await api.deleteUserById(userId);
            if (response.status == 200) {
                onDeleteUser(userId);
            }
            alert(response.message);
        }
    }

    return (
        <li className="shadow rounded-md border max-w-lg w-3/4 mx-auto border-gray-200 dark:border-gray-800 dark:shadow-gray-600 m-10 relative">
            {userData.phoneNumber && (
                <div className="absolute right-0 top-0">
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-sm font-medium px-2.5 py-1 rounded-bl-lg">tel: {userData.phoneNumber}</span>
                </div>
            )}
            <div className="image-container absolute translate-x-[-50%] translate-y-[-50%]">
                <Image
                    src={profilePicture}
                    width={500}
                    height={500}
                    alt={userData.username ?? 'User'}
                    className=""
                    priority={true}
                />
            </div>
            <div className="px-4 py-5 sm:px-6">
                <div className="mt-2 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">{userData.username}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Date of birth: {dateToYMD(userData.birthdate)}</p>
                    </div>
                </div>
                <div className="description my-2">
                    <Accordion
                        title={`Show detail info`}
                        content={userData.description}
                    />
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 ">Status: <span className={userData.activeStatus ? `text-green-500` : `text-red-500`}>{userData.activeStatus ? 'Active' : 'Inactive'}</span></p>
                    <p className="flex justify-between">
                        <Link href={`/edit/${userData._id}`} className="font-medium">
                            <button type="button" className="px-4 py-1 mr-2 text-xs font-medium text-center inline-flex items-center text-white hover:text-indigo-200 bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Edit
                            </button>
                        </Link>
                        <button type="button" onClick={() => onClickDeleteButton(userData._id)} className="px-4 py-1 text-xs font-medium text-center inline-flex items-center text-white hover:text-red-200 bg-red-700 rounded hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <span className="font-medium">Delete</span>
                        </button>
                    </p>
                </div>
            </div>
        </li>
    )
}