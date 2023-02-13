import React from "react";

export default function Banner() {
  return (
    <div
      style={{ backgroundImage: "url('/space-banner.jpg')" }}
      className="bg-cover bg-center h-96"
    >
      <div className="flex items-center h-full p-8 pt-24 flex-col">
        <h1 className="text-white text-6xl font-bold mb-2">
          Welcome to XSPACE
        </h1>
        <p className="text-white text-xl">
          Vizualizion of data from <a className="font-bold underline" href="https://docs.spacexdata.com/">SpaceX Docs</a>
        </p>
      </div>
    </div>
  );
}
