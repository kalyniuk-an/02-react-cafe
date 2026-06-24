import { useState } from "react";
import css from "./App.module.css";

import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStatus from "../VoteStats/VoteStats";

import { Votes } from "../../types/votes";

export default function App() {
  const [votes, setVote] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  // const handleVote(type)

  const resetVotes = () => { setVote({ good: 0, neutral: 0, bad: 0 }) };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  return (
    <div className={css.app}>
      <CafeInfo></CafeInfo>
      <VoteOptions onReset={resetVotes} canReset={false}></VoteOptions>
      <VoteStatus votes={ votes} totalVotes = {totalVotes}></VoteStatus>
   </div>
  );
}

