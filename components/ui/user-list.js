"use client"
import { UserCard } from "@/components/ui/user-card";
import { useState } from "react";

export function UserList({ users }) {
    const [userList, setUserList] = useState(users);

    const deleteUser = (userId) => {
        setUserList(userList.filter(user => user._id !== userId));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {userList?.map((user, index) =>
                <div key={index}>
                    <UserCard
                        user={user}
                        onDeleteUser={deleteUser}
                    >
                    </UserCard>
                </div>
            )}
        </div>
    )
}