import React from "react";
import "./signatory.css"

export default function Signatory({ name, link, exceptions }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{link}</td>
      <td>{exceptions}</td>
    </tr>
  )
}
