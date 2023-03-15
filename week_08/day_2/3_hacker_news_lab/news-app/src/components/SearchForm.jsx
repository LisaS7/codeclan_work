import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function SearchForm({ setSearch }) {
  return (
    <div className="m-4">
      <Form className="col-2 m-auto">
        <Form.Label>Search: </Form.Label>
        <Form.Control
          type="text"
          name="search"
          id="search"
          onChange={(event) => setSearch(event.target.value)}
        />
      </Form>
    </div>
  );
}
