import Answeres from "./Answeres";
import ProgressBar from "./Progressbar";
import Miniplayer from "./Miniplayer";
function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answeres />
      <ProgressBar />
      <Miniplayer />
    </>
  );
}
export default Quiz;
