import { UserCard } from "@/components/ui/user-card";
import { UserList } from "@/components/ui/user-list";
import users from "@/constants/users.json";


export default function Home() {
  const userList = users;

  return (
      <UserList>
        {userList.map((user, index)=>
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