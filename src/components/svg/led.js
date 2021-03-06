import React from "react"
import styled from "styled-components"

const AnimationContainer = styled.g`
  animation: blinking ${props => props.time}ms ease-in-out infinite;

  @keyframes blinking {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const Led = ({
  isOn = false,
  socket = false,
  id = "",
  size = 36,
  colors = {
    on: "#f73333",
    off: "#800000a1",
    socket: "gray",
  },
  isBlinking = false,
  blinkTime = 0,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    id={id}
  >
    <g fill="none">
      {socket ? (
        <circle
          cx="24"
          cy="24"
          r="12"
          fill={colors.off}
          stroke={colors.socket}
          strokeWidth="6"
        />
      ) : (
        <circle cx="24" cy="24" r="8" fill={colors.off} />
      )}
      {(isOn || isBlinking) && (
        <AnimationContainer fill="none" time={blinkTime}>
          <circle cx="24" cy="24" r="8" fill={colors.on} fillOpacity=".8" />
          <circle cx="24" cy="24" r="16" fill={colors.on} fillOpacity=".2" />
          <circle cx="24" cy="24" r="24" fill={colors.on} fillOpacity=".4" />
        </AnimationContainer>
      )}
    </g>
  </svg>
)

export default Led
