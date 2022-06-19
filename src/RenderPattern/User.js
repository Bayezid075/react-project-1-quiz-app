import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import Counter from "./Counter";

function User() {
  return (
    <div>
      <Counter
        renderPatt={(count, incriment) => (
          <HoverCounter count={count} incriment={incriment} />
        )}
      />
      <Counter
        renderPatt={(count, incriment) => (
          <ClickCounter count={count} incriment={incriment} />
        )}
      />
    </div>
  );
}
export default User;
