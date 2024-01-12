import React from "react";
import { array } from "../../../mockData/logsArray";

const page = ({ params }) => {
  const shownLog = array.filter((log) => {
    console.log("LOG", log);
    console.log("PARAM", params.id);
    console.log("RETURNED", log.id === Number(params.id));

    return log.id === Number(params.id);
  });
  console.log("SHOWN LOG:", shownLog);

  return (
    <>
      <br />
      <div>id: {shownLog[0].id}</div>
      <br />
      <div>date: {shownLog[0].date}</div>
      <br />
      <div>time: {shownLog[0].time}</div>
      <br />
      <div>level: {shownLog[0].level}</div>
      <br />
      <div>message: {shownLog[0].message}</div>
      <br />
      <div>className: {shownLog[0].className}</div>
      <br />
      <div>comment: {shownLog[0].comment}</div>
      <br />
      <div>dateCommented: {shownLog[0].dateCommented}</div>
      <br />
      <div>timeCommented: {shownLog[0].timeCommented}</div>
      <br />
    </>
  );
};

export default page;
