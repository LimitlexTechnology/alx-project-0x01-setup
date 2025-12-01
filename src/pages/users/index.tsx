import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";

const UsersPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 space-y-4">
        <h2 className="text-3xl font-thin">Users</h2>
        <Button>Click Me</Button>
      </main>
      <Footer />
    </div>
  );
};

export default UsersPage;
