import React from "react";
import Sidebar from "../components/shared/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      {/* <Sidebar /> for desktop view*/}
      <Sidebar />
      {/* <MobileNvar /> for mobile view*/}
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default layout;
