'use client'
import { UserList } from "@/components/ui/user-list";
import api from '@/lib/api-client';
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.getAllUsers().then((response) => {
      const { data } = response;
      setUsers(data);
    });
  }, [])
  return (
    (users.length > 0) &&
    <UserList users={users} />
  );
}
