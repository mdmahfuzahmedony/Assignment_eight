import React from "react";
import useHeroApp from "../Hook/useheroapp";
import SingleApp from "../Component/singleApp";

const Allapps = () => {
  const { app, error, loading } = useHeroApp();
  console.log(app);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-[1300px] mx-auto">
      {app.map((app) => (
        <SingleApp key={app.id} app={app} />
      ))}
    </div>
  );
};

export default Allapps;
