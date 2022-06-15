interface TerminalProps {
  exitAnimation: (() => void)
}

function keyPressEvent() {
  
}

export const Terminal = ({ exitAnimation }: TerminalProps) => {
  return <div>
    {/* Terminal menu bar */}
    <div>
      <button onClick={exitAnimation}>X</button>
    </div>

    {/* Terminal body */}
    <div>
      <div></div>
      <input type="text" onKeyDown={}/>
    </div>
  </div>
}
