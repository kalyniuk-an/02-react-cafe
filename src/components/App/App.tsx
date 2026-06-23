import { useState } from "react";
import css from "./App.module.css";

import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";

// import { Votes } from "../../types/votes";

export default function App() {
  // const [votes, setVote] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  return (
    <div className={css.app}>
      <CafeInfo></CafeInfo>
      <VoteOptions></VoteOptions>
   </div>
  );
}

