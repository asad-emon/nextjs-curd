import Image from "next/image"
import Link from "next/link"
import { dateToYMD } from "@/lib/helper"

export function UserCard ({user}) {
    const profilePicture = user.profilePicture??"/images/avatar.jpg"
    return (
            <li className="shadow rounded-md border max-w-lg w-3/4 mx-auto border-gray-200 dark:border-gray-800 m-10 relative">
                {user.phoneNumber && (
                    <div className="absolute right-0 top-0">
                        <span className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-sm font-medium px-2.5 py-1 rounded-bl-lg">tel: {user.phoneNumber}</span>
                    </div>
                )}
                <div className="image-container absolute translate-x-[-50%] translate-y-[-50%]">
                    <Image
                        src={profilePicture}
                        width={500}
                        height={500}
                        alt={user.username??'User'}
                        className=""
                        priority={true}
                    />
                </div>
                <div className="px-4 py-5 sm:px-6">
                    <div className="mt-2 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">{user.username}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Date of birth: {dateToYMD(user.birthdate)}</p>
                        </div>
                        <p className="mt-1 max-w-2xl text-sm text-gray-600 dark:text-gray-400 text-right">{user.description}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 ">Status: <span className={user.activeStatus?`text-green-500`:`text-red-500`}>{user.activeStatus?'Active':'Inactive'}</span></p>
                        <Link href={`/edit/${user._id}`} className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">Edit</Link>
                    </div>
                </div>
            </li>
    )
}