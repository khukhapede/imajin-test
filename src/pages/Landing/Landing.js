import { useQuery } from "react-query";
import { API } from "../../config/api";
import Styles from "./Landing.module.css";
import React from "react";
import Cards from "../../components/Cards/Cards";
import Masonry from "react-masonry-component";

export default function Landing() {
  let api = API();

  let { data: authorsData, isLoading } = useQuery("authorsCache", async () => {
    const config = {
      method: "GET",
    };

    const response = await api.get("", config);

    return response;
  });

  const masonryOptions = {
    fitWidth: true,
  };

  return (
    <div className={Styles.mainBody}>
      <div className={Styles.headerTitle}>The Authors</div>
      <div className={Styles.authorList}>
        {isLoading ? (
          <img
            src="/loading.png"
            alt="loading..."
            className={Styles.loadingLogo}
          />
        ) : (
          <Masonry options={masonryOptions} elementType={"div"}>
            {authorsData.map((author) => (
              <div key={author.id}>
                <Cards
                  id={author.id}
                  name={author.name}
                  telp={author.telp}
                  photo={author.photo}
                />
              </div>
            ))}
          </Masonry>
        )}
      </div>
    </div>
  );
}
