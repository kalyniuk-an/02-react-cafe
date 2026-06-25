import { useState } from "react";
import css from "./App.module.css";

import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStatus from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

import { type Votes } from "../../types/votes";

export default function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  const handleVote = (key: keyof Votes) => {
    setVotes({ ...votes, [key]: votes[key] + 1 });
  };

  const resetVotes = () => { setVotes({ good: 0, neutral: 0, bad: 0 }) };

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;
  return (
    <div className={css.app}>
      <CafeInfo></CafeInfo>
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0}></VoteOptions>
      
      {totalVotes>0?
      (<VoteStatus votes={votes} totalVotes={totalVotes} positiveRate={positiveRate}></VoteStatus>):
      (<Notification/>)}
   </div>
  );
}

