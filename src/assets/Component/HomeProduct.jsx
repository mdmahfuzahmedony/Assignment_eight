import React from "react";
import useHeroApp from "../Hook/useHeroApp";
import SingleApp from "./singleApp";

const HomeProduct = () => {
  const { app, error, loading } = useHeroApp();
  const treandingApp = app.slice(0, 8);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-[1300px] mx-auto">
      {treandingApp.map((app) => (
        <SingleApp key={app.id} app={app} />
      ))}
    </div>
  );
};

export default HomeProduct;
