import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ListUser = () => {
  const [dataUser, setDataUser] = useState([]);

  async function getDataUser() {
    try {
      const response = await axios.get("http://localhost:3000/pengguna");
      setDataUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 flex flex-col items-center py-12">
      <h1 className="font-bold text-4xl text-white mb-8 drop-shadow-lg">
        List User
      </h1>
      <div className="w-full max-w-3xl flex flex-col gap-6">
        {dataUser.map((e) => (
          <div
            key={e.id}
            className="bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 flex flex-col items-start"
          >
            <h1 className="text-purple-700 font-semibold text-2xl mb-4 flex items-center">
              <span className="material-icons mr-2">{e.nama}</span>
            </h1>
            <p className="text-gray-700 font-medium mb-2">
              <span className="font-semibold">Email:</span> {e.email}
            </p>
            <p className="text-gray-700 font-medium mb-2">
              <span className="font-semibold">Jenis Kelamin:</span>{" "}
              {e.jenis_kelamin}
            </p>
            <p className="text-gray-700 font-medium">
              <span className="font-semibold">Tanggal Lahir:</span>{" "}
              {e.tanggal_lahir}
            </p>
            <NavLink to={`/detailuser?id=${e.id}`}>
              <button className="bg-purple-500 p-2 rounded-md mt-4 shadow-2xl text-white">
                Detail
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUser;
