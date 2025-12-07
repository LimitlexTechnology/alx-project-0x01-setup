import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company, id }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <span className="text-sm text-gray-500">ID: {id}</span>
      </div>
      <p className="text-gray-600">@{username}</p>
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
        <span>Email: {email}</span>
        <span>Phone: {phone}</span>
        <span>Company: {company.name}</span>
        <span>City: {address.city}</span>
      </div>
      <div className="mt-3 text-sm">
        <a className="text-blue-600 hover:underline" href={`https://${website}`} target="_blank" rel="noreferrer">
          {website}
        </a>
      </div>
    </div>
  );
};

export default UserCard;

