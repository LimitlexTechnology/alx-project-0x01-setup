import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

type UsersPageProps = { posts: UserProps[] };

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen"> 
      <Header /> 
      <main className="p-4"> 
        <div className="flex justify-between"> 
        <h1 className=" text-2xl font-semibold">Users</h1> 
        </div> 
        <div className="grid grid-cols-3 gap-2 "> 
          { 
            posts.map((user) => ( 
              <UserCard key={user.id} {...user} /> 
            )) 
          } 
        </div> 
      </main> 
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
