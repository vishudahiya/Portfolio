import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function User() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/vishudahiya")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Data", data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <>
      <p className="md:text-3xl md:p-10 md:text-center">
        GitHub: {data.followers}
      </p>
      <img src={data.avatar_url} alt="Git profile" width={300} />
    </>
  );
}

export const gitHubLoader = async () => {
  const response = await fetch("https://api.github.com/users/vishudahiya");

  return response.json();
};
