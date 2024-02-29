import { MainLayout } from "@/components/ui/main-layout";
import { UserCard } from "@/components/ui/user-card";
import { UserList } from "@/components/ui/user-list";

export default function Home() {
  const userList = [
    {username: "John", description: "I am a programer", phoneNumber: "1234567890", birthdate:'2000-0-0', activeStatus:true},
    {username: "Paul", description: "I am a designer", phoneNumber: "1234567890", birthdate:'2000-0-0', activeStatus:false},
    {username: "Lisa", description: "I am a photographer", phoneNumber: "1234567890", birthdate:'2000-0-0', activeStatus:true},
  ]

  return (
    <MainLayout>
        <UserList>
          {userList.map((user, index)=>
            <div key={index}>
                <UserCard
                    username={user.username}
                    description={user.description}
                    activeStatus={user.activeStatus}
                    phoneNumber={user.phoneNumber}
                    birthdate={user.birthdate}
                >
                </UserCard>
            </div>
          )}
        </UserList>
    </MainLayout>
  );
}
