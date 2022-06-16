import { useState } from "react"
import { keyDownEventHandler } from "./KeyDownHandler"
interface TerminalProps {
  exitAnimation: (() => void)
}

export const Terminal = ({ exitAnimation }: TerminalProps) => {
  const [cwd, setCwd] = useState("~")
  return <>
    {/* Terminal window */}
    <div>

      {/* Terminal menu bar */}
      <div>
        <button onClick={exitAnimation}>X</button>
      </div>

      {/* Terminal body */}
      <div>
        {/* Terminal Prompt */}
        <div>Last login: localstorage.get()</div>
        <div>
          <span>visitor@chris-straka.com</span>
          <span>{cwd}</span>
          <input type="text" onKeyDown={keyDownEventHandler} />
        </div>
      </div>
    </div>
  </>
}
