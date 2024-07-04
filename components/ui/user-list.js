"use client"
import { UserCard } from "@/components/ui/user-card";
import { useState } from "react";

export function UserList ({users}) {
    const [userList, setUserList] = useState(users);

    const deleteUser = (userId) => {
        setUserList(userList.filter(user => user._id !== userId));
    };

    return (
        <ul className="bg-white rounded-lg shadow overflow-hidden dark:bg-gray-800 dark:border-gray-700">
          {userList?.map((user, index)=>
            <div key={index}>
                <UserCard
                    user={user}
                    onDeleteUser={deleteUser}
                >
                </UserCard>
            </div>
          )}
        </ul>
    ) 
}