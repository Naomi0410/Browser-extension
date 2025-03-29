"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const fetchData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    return data;
  };

  const [extensions, setExtensions] = useState([]);
  const [filter, setFilter] = useState("all"); // State to track the current filter

  useEffect(() => {
    fetchData().then((data) => setExtensions(data));
  }, []);

  const toggleActiveStatus = (id) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((extension) =>
        extension.id === id
          ? { ...extension, isActive: !extension.isActive }
          : extension
      )
    );
  };

  // Filtered extensions based on the selected filter
  const filteredExtensions = extensions.filter((extension) => {
    if (filter === "active") return extension.isActive;
    if (filter === "inactive") return !extension.isActive;
    return true; // Show all extensions for "all"
  });

  const removeExtension = (id) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((extension) => extension.id !== id)
    );
  };

  return (
    <>
      {/* Header Section */}
      <div className=" flex flex-col gap-6 md:flex-row justify-between items-center mt-12">
        <h1 className="md:text-4xl text-3xl font-semibold">Extensions List</h1>
        <div className="flex gap-3 items-center">
          <button
            className={`btn ${filter === "all" ? "btn-active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`btn ${filter === "active" ? "btn-active" : ""}`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={`btn ${filter === "inactive" ? "btn-active" : ""}`}
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>

      {/* Extensions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 gap-4 py-6">
        {filteredExtensions.map((extension) => (
          <div
            key={extension.id}
            className="p-4 xl:h-60 lg:h-50 md:h-50 h-56 card rounded-lg shadow-md flex flex-col justify-between"
          >
            {/* Extension Details */}
            <div className="flex gap-3 items-start">
              <Image
                src={extension.logo}
                alt={extension.name}
                width={70}
                height={70}
              />
              <div>
                <h2 className="xl:text-3xl lg:text-2xl md:text-2xl text-2xl font-semibold">
                  {extension.name}
                </h2>
                <p className="mt-2">
                  {extension.description}
                </p>
              </div>
            </div>

            {/* Actions Section */}
            <div className="flex justify-between items-center">
              <button
                className="remove"
                onClick={() => removeExtension(extension.id)}
              >
                Remove
              </button>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={extension.isActive}
                  onChange={() => toggleActiveStatus(extension.id)}
                  className="sr-only peer"
                />
                <div
                  className={`w-11 h-6 rounded-full  toggle ${
                    extension.isActive
                      ? "toggle-switch-active"
                      : "toggle-switch"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    extension.isActive ? "translate-x-5" : ""
                  }`}
                ></div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
