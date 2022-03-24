import React from "react";

import { Button, Form } from "react-bootstrap";

import Styles from "./EditBook.module.css";

export default function EditBook() {
  return (
    <div className={Styles.mainBody}>
      <div className={Styles.headerTitle}>Edit Book</div>
      <div className={Styles.inputField}>
        <Form>
          <Form.Group className="my-3">
            <Form.Control
              type="text"
              placeholder="judul"
              name="judul"
              className={`bg-dark text-white ${Styles.formText}`}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Control
              type="number"
              placeholder="harga"
              name="harga"
              className={`bg-dark text-white ${Styles.formText}`}
            />
          </Form.Group>
          <Button
            className={`${Styles.submitBtn} mt-3 float-end px-5`}
            type="submit"
          >
            <b>Submit</b>
          </Button>
        </Form>
      </div>
    </div>
  );
}
