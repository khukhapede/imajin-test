import React from "react";

import { Table } from "react-bootstrap";
import Styles from "./BookList.module.css";
import { API } from "../../config/api";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import rupiahFormat from "rupiah-format";

export default function Booklist() {
  let api = API();
  const { id } = useParams();
  let navigate = useNavigate();

  let { data: booksData, isLoading: booksLoad } = useQuery(
    "booksListCache",
    async () => {
      const config = {
        method: "GET",
      };

      const response = await api.get("/books/" + id, config);

      return response;
    }
  );

  function editNav() {
    navigate("/edit-book");
  }

  return (
    <div className={Styles.mainBody}>
      <div className={Styles.headerTitle}>Book List</div>

      {booksLoad ? (
        <img
          src="/loading.png"
          alt="loading..."
          className={Styles.loadingLogo}
        />
      ) : (
        <Table className={Styles.table} striped hover size="lg" variant="dark">
          <thead style={{ color: "#fa247d" }}>
            <tr>
              <th width="1%" className="text-center">
                No
              </th>
              <th>Judul</th>
              <th>Harga</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {booksData.books.map((item, index) => (
              <tr key={item.judul}>
                <td className="align-middle text-center">{index + 1}</td>
                <td className="align-middle text-center">{item.judul}</td>
                <td className="align-middle text-center">
                  {rupiahFormat.convert(item.harga)}
                </td>
                <td className="align-middle text-center">
                  <button className={Styles.editBtn} onClick={editNav}>edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
