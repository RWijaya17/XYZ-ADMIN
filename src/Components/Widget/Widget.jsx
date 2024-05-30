import React from 'react';
import './Widget.scss';

function Widget({type}) {
  let data;

  //temp

  switch (type) {
    case "PendAccount":
      data={
        title : "Pending Account",
        type : "Account(s)",
        counter:"3",
      };
      break;
      case "ActiveAccount":
      data={
        title : "Active Accounts",
        type : "Account(s)",
        counter: 156,

      };
      break;
      case "ActiveCentra":
      data={
        title : "Active Centra",
        type : "Facility(s)",
        counter: 36,

      };
      break;
    default:
    break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <div className="bottom">
          <span className="counter">{data.counter}</span>
          <span className="type">{data.type}</span>
        </div>
      </div>
    </div>
  );
}

export default Widget;