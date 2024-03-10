import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-neutral-800 min-h-screen text-gray-300">
      <div className="container max-w-5xl mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
