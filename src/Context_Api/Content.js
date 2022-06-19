import HoverCounter from "./HoverCounter"
import Counter from "../RenderPattern/Counter"
import ThemeContext from "../lib/ThemeContext"
export default function Content({theme}) {
    return(
      <div>
            <h1>This is content</h1>

            <Counter>
                {(count, incriment) => (
                    <HoverCounter
                        count={count}
                        increment={incriment}
                        theme={theme}
                     
                    />
                )}
            </Counter>
      </div>
    )
}
