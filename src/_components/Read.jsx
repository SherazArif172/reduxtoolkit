import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUser } from "../redux/slices/slice";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(readUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <div className="flex justify-center bg-white h-screen w-full ">
        <div className="cursor-pointer dark:text-white  grid grid-cols-3 gap-2">
          {users.data &&
            users.data.map((data) => (
              <div
                key={data.id}
                className="p-6 bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500"
              >
                <div className="flex items-center">
                  <h3 className="my-2  text-lg font-bold text-gray-800 dark:text-white">
                    {data.name}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  {data.email}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  {data.gender}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  {data.age}
                </p>
                <div className="flex justify-between mt-6 ">
                  <a href="#" className="bg-white text-black p-3 rounded-md">
                    view
                  </a>
                  <a href="#" className="bg-white text-black p-3 rounded-md">
                    edit
                  </a>
                  <a href="#" className="bg-white text-black p-3 rounded-md">
                    delete
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Read;
