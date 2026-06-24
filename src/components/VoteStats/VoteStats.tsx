import styles from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface VoteStatsProps{
  votes: Votes;
  totalVotes: number;
}
export default function VoteStatus({votes, totalVotes}: VoteStatsProps) {
  return (<div className={styles.container}>
    <p className={styles.stat}>Good: <strong>{votes.good}</strong></p>
  <p className={styles.stat}>Neutral: <strong>0</strong></p>
  <p className={styles.stat}>Bad: <strong>0</strong></p>
  <p className={styles.stat} >Total: <strong>{totalVotes}</strong></p>
  <p className={styles.stat}>Positive: <strong>0%</strong></p>
</div>)
}