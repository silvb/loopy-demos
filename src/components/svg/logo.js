import React from "react"
import styled from "styled-components"

const AnimatedLogo = styled.svg`
  /* #right-knob {
    transform: rotate(90deg);
  } */
`

const Logo = () => (
  <AnimatedLogo
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="96"
    viewBox="0 0 48 64"
  >
    <g fill="none" fillRule="evenodd">
      <circle
        stroke="#9580ff"
        strokeWidth="2"
        r="6"
        fill="none"
        cx="14"
        cy="14"
      />
      <line
        x1="14"
        y1="8"
        x2="14"
        y2="14"
        stroke="#9580ff"
        strokeWidth="2"
        strokeLinecap="round"
        transform="rotate(-30 14 14)"
      />
      <circle
        stroke="#ff80bf"
        strokeWidth="2"
        r="6"
        fill="none"
        cx="32"
        cy="14"
      />
      <line
        x1="32"
        y1="8"
        x2="32"
        y2="14"
        stroke="#ff80bf"
        strokeWidth="2"
        strokeLinecap="round"
        // transform="rotate(60 32 14)"
      >
        <animateTransform
          id="knob"
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 32 14; 60 32 14; 90 32 14; 60 32 14"
          keyTimes="0; 0.5; 0.75; 1"
          dur="1s"
          repeatCount="1"
          fill="freeze"
        />
      </line>
      <line
        x1="14"
        y1="26"
        x2="14"
        y2="42"
        stroke="#9580ff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="40"
        x2="16"
        y2="40"
        stroke="#ff80bf"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <animate
          attributeName="y2"
          values="40;28"
          keySplines="0.1 0.8 0.2 1"
          calcMode="spline"
          dur="0.5s"
          begin="knob.end"
          repeatCount="1"
          fill="freeze"
        />
        <animate
          id="leftslide"
          attributeName="y1"
          values="40;28"
          keySplines="0.1 0.8 0.2 1"
          calcMode="spline"
          dur="0.5s"
          begin="knob.end"
          repeatCount="1"
          fill="freeze"
        />
      </line>

      <line
        x1="23"
        y1="26"
        x2="23"
        y2="42"
        stroke="#9580ff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="21"
        y1="28"
        x2="25"
        y2="28"
        stroke="#ff80bf"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <animate
          attributeName="y2"
          values="26;38"
          keySplines="0.1 0.8 0.2 1"
          calcMode="spline"
          dur="0.5s"
          begin="leftslide.end"
          repeatCount="1"
          fill="freeze"
        />
        <animate
          id="middleslide"
          attributeName="y1"
          values="26;38"
          keySplines="0.1 0.8 0.2 1"
          calcMode="spline"
          dur="0.5s"
          begin="leftslide.end"
          repeatCount="1"
          fill="freeze"
        />
      </line>
      <line
        x1="32"
        y1="26"
        x2="32"
        y2="42"
        stroke="#9580ff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="30"
        y1="40"
        x2="34"
        y2="40"
        stroke="#ff80bf"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <animate
          attributeName="y2"
          values="40;32"
          keySplines="0.1 0.8 0.2 1"
          calcMode="spline"
          dur="0.5s"
          begin="middleslide.end"
          repeatCount="1"
          fill="freeze"
        />
        <animate
          id="rightslide"
          attributeName="y1"
          values="40;32"
          keySplines="0.1 0.8 0.2 1"
          calcMode="spline"
          dur="0.5s"
          begin="middleslide.end"
          repeatCount="1"
          fill="freeze"
        />
      </line>
      <circle r="4" cx="16" cy="52" fill="#9580ff">
        <animate
          id="leftstomp"
          attributeName="fill"
          from="#9580ff"
          to="#ff80bf"
          dur="0.2s"
          repeatCount="1"
          begin="rightstomp.end"
          fill="freeze"
        />
      </circle>
      <circle r="4" cx="32" cy="52" fill="#ff80bf">
        <animate
          id="rightstomp"
          attributeName="fill"
          from="#ff80bf"
          to="#9580ff"
          dur="0.2s"
          repeatCount="1"
          begin="rightslide.end"
          fill="freeze"
        />
      </circle>
      <rect
        width="44"
        height="60"
        x="2"
        y="2"
        stroke="#9580ff"
        strokeWidth="2"
        rx="4"
        ry="4"
        fill="none"
      />
    </g>
  </AnimatedLogo>
)

export default Logo
