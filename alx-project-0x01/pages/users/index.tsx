import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps } from "@/interfaces";
import { useState } from "react";

type UsersPageProps = { posts: UserProps[] };

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);

  const handleAddUser = (newUser: UserProps) => {
    setUser({ ...newUser, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen"> 
      <Header /> 
      <main className="p-4"> 
        <div className="flex justify-between"> 
        <h1 className=" text-2xl font-semibold">Users</h1>
        <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button> 
        </div> 
        <div className="grid grid-cols-3 gap-2 "> 
          { 
            posts.map((user) => ( 
              <UserCard key={user.id} {...user} /> 
            )) 
          } 
        </div> 
      </main> 
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div> 
  );
};

export async function getStaticProps() {
  const _unusedUsersUrl = " `https://jsonplaceholder.typicode.com/users` ";
  const url = _unusedUsersUrl.replace(/`/g, "").trim();
  const response = await fetch(url);
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
