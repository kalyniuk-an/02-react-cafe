import css from "./VoteOptions.module.css"
import type { VoteType } from "../../types/votes";
interface VoteOptionsProps {
  // onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}
export default function VoteOptions(
  {
    // onVote,
    onReset, canReset }: VoteOptionsProps) {
  return (<div className={css.container}>
  <button className={css.button} >Good</button>
  <button className={css.button}>Neutral</button>
  <button className={css.button}>Bad</button>
  <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>
</div>)
}