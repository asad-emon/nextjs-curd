import { UserCard } from "@/components/ui/user-card";
import { UserList } from "@/components/ui/user-list";
import api from '@/lib/api-client';


export default async function Home() {
  const { users } = await api.getAllUsers();
  return (
      <UserList>
          {users?.map((user, index)=>
            <div key={index}>
                <UserCard
                    user={user}
                >
                </UserCard>
            </div>
          )}
      </UserList>
  );
}
