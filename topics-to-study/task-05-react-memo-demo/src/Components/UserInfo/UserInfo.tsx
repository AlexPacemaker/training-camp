import React, { JSX } from "react";

const UserInfo = React.memo(({ name }: { name: string }): JSX.Element => {
  console.log("Rendering UserInfo:", name);
  return <div>User: {name}</div>;
});

export default UserInfo;
