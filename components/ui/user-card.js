"use client"
import Image from "next/image"
import { dateToYMD } from "@/lib/helper"
import useOutsideClick from "@/hooks/useOutsideClick"
import api from "@/lib/api-client"
import { useMemo, useState, useRef } from "react"
import { useRouter } from 'next/navigation'

export function UserCard({ user, onDeleteUser }) {
    const router = useRouter();
    const userData = useMemo(() => {
        return user;
    }, []);
    const profilePicture = userData.profilePicture ?? "/images/avatar.jpg";

    async function onClickDelete(userId) {
        if (window.confirm("Do you really want to delete this user?")) {
            const response = await api.deleteUserById(userId);
            if (response.status == 200) {
                onDeleteUser(userId);
            }
            alert(response.message);
        }
    }

    function onClickEdit(userId) {
        router.push(`/edit/${userId}`);
    }

    return (
        <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <DropDownAction itemId={userData._id} onDelete={onClickDelete} onEdit={onClickEdit} />
            <div className="flex flex-col justify-between items-center pb-10 h-full">
                <div className="flex flex-col items-center">
                    <Image
                        src={profilePicture}
                        width={500}
                        height={500}
                        alt={userData.username ?? 'User'}
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        priority={true}
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userData.username}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: userData.description ?? 'No content' }}></span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{userData.phoneNumber}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{dateToYMD(userData.birthdate)}</span>
                </div>
                <div className="flex">
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                    <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                </div>
            </div>
        </div>
    )
}

const DropDownAction = ({ itemId, onDelete, onEdit }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownWrapper = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    useOutsideClick(dropdownWrapper, toggleDropdown);

    return (
        <div className="flex justify-end relative px-4 pt-4">
            <button onClick={toggleDropdown} className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span className="sr-only">Open dropdown</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
            </button>
            {
                isOpen &&
                <div ref={dropdownWrapper} className={`absolute top-10 z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dropdown-menu ${isOpen ? 'open' : ''}`}>
                    <ul className="py-2">
                        <li className="cursor-pointer">
                            <a onClick={() => onEdit(itemId)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                        </li>
                        <li className="cursor-pointer">
                            <a onClick={() => onDelete(itemId)} className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500 dark:hover:text-white">Delete</a>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}