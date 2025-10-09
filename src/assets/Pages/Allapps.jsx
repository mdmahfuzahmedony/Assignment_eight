import React from "react";
import SingleApp from "../Component/singleApp";

const Allapps = ({ app }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 max-w-[1300px] mx-auto">
      {app.map((singleApp) => (
        <SingleApp key={singleApp.id} app={singleApp} />
      ))}
    </div>
  );
};

export default Allapps;
