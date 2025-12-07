import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const UsersPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-thin mb-4">Users</h2>
        <ul className="list-disc pl-5">
          <li>User A</li>
          <li>User B</li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;

