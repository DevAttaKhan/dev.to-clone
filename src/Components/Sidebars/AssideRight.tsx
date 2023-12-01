import React from "react";
import { DiscussionList } from "./DiscussionList";

export const AssideRight = () => {
  return (
    <div>
      <DiscussionList />
      <DiscussionList title="watercooler" />
    </div>
  );
};
