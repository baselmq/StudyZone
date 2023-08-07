import React from "react";

const TableAdmin = ({ columns, data, onViewClick, onEditClick, onDeleteClick}) => {
  return (
<>

<div class="table-wrapper">
    <table class="fl-table">
    <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column]}</td>
            ))}
            <td>
              <button className="btnView" onClick={() => onViewClick(row)}><i class="las la-eye"></i></button>
            </td>
          </tr>
        ))}
      </tbody>
   
    </table>
</div>
</>
  );
};

export default TableAdmin;
