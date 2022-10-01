import "./Name.css";
import { useSpring, animated } from "@react-spring/web";


function Name() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      }
    })
  }

  return (
    <animated.div
      className={`name`}
      onClick={handleClick}
      style={{
        ...springs,
      }}
    >
      <h4>
        Casio FX87 
      </h4>
    </animated.div>
  )
}

export default Name;