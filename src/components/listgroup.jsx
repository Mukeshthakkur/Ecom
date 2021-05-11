import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, onSelectItem, selectedItem } = props;

  console.log(items)
  return (<ul className="list-group">
        {items.map((item) => (
          <li key={item[valueProperty]} onClick={() => onSelectItem(item)} className={item === selectedItem ? "list-group-item activ" : "list-group-item"}>{item[textProperty]}</li>
        ))}</ul>
  );
};

ListGroup.defaultProps={
    textProperty: "name",
    valueProperty: "_id"
}

export default ListGroup;
