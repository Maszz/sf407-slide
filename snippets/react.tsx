import React, { useState } from "react";

// #region snippet
const Component = () => {
  const [state] = useState("Hello world!!");
  return (
    <div>
      <h1>{state}</h1>
    </div>
  );
};
// #endregion snippet
