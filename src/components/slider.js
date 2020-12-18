import React, { useState } from "react"
import styled, { css } from "styled-components"

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
`

const sliderThumb = css`
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  border: none;
  background: var(--cyan);
  cursor: pointer;
`

const sliderTrack = css`
  width: 100%;
  height: 6px;
  background: linear-gradient(
    to right,
    var(--pink) var(--progress),
    var(--dark) var(--progress)
  );
  border-radius: 3px;
  border: none;
  cursor: pointer;
`

const StyledSlider = styled.input`
  flex-grow: 1;
  -webkit-appearance: none;
  background: none;
  outline: 0;
  --progress: ${props => props.progress}%;

  ::-webkit-slider-thumb {
    margin-top: -5px;
    -webkit-appearance: none;
    ${sliderThumb}
  }

  ::-moz-range-thumb {
    ${sliderThumb}
  }

  ::-webkit-slider-runnable-track {
    ${sliderTrack}
  }

  ::-moz-range-track {
    ${sliderTrack}
  }
`

const StyledLabel = styled.label`
  font-size: 1.3rem;
  margin-left: 1rem;
`

const findClosestValue = (value, valueArray) =>
  valueArray.reduce((acc, curr) => {
    const lastDistance = Math.abs(value - acc)
    const currDistance = Math.abs(value - curr)

    return lastDistance <= currDistance ? acc : curr
  }, valueArray[0])

const Slider = ({ id = "", initialValue = 0, values = [], label = "" }) => {
  const [currentValue, setCurrentValue] = useState(initialValue)
  const [timeoutRef, setTimeoutRef] = useState(null)

  return (
    <SliderContainer>
      <StyledSlider
        type="range"
        id={id}
        min={0}
        max={10}
        step="0.1"
        value={currentValue}
        onChange={e => {
          clearTimeout(timeoutRef)
          setCurrentValue(e.target.value)
          const val = findClosestValue(e.target.value, values)
          const timeoutId = setTimeout(() => {
            setCurrentValue(val)
          }, 100)
          setTimeoutRef(timeoutId)
        }}
        progress={(currentValue / 10) * 100}
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </SliderContainer>
  )
}
export default Slider
