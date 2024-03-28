import Image from "next/image"
import Link from "next/link"
export function UserCard ({user}) {
    return (
            <li className="shadow rounded-sm border border-gray-200 m-10 relative">
                {user.phoneNumber && (
                    <div className="bg-teal-100 absolute right-0">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">tel: {user.phoneNumber}</span>
                    </div>
                )}
                <div className="image-container absolute translate-x-[-50%] translate-y-[-50%]">
                    <Image
                        src={user.profilePicture??"/images/avatar.jpg"}
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
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{user.username}</h3>
                            <p className="text-sm text-gray-600">Date of birth: {user.birthdate}</p>
                        </div>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 text-right">{user.description}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">Status: <span className={user.activeStatus?`text-green-600`:`text-red-600`}>{user.activeStatus?'Active':'Inactive'}</span></p>
                        <Link href={`/edit/${user.id}`} className="font-medium text-indigo-600 hover:text-indigo-500">Edit</Link>
                    </div>
                </div>
            </li>
    )
}