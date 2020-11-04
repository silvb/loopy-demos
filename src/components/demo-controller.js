import React, { useState, useEffect } from "react"

import Pedal from "./pedal"
import Presets from "./presets"
import AudioPlayer from "./audio-player"

const DemoController = ({ config = {}, presets = [] }) => {
  const [activePreset, setActivePreset] = useState(presets[0])
  const [sweepSetting, setSweepSetting] = useState({})

  useEffect(() => {
    if (activePreset.isSweep) {
      setSweepSetting({ [activePreset.target]: activePreset.initialValue })
    } else {
      setSweepSetting({})
    }
  }, [activePreset])

  return (
    <>
      <AudioPlayer preset={activePreset} sweepSetting={sweepSetting} />
      <Presets
        activePresetId={activePreset?.id}
        presets={presets}
        onSelect={selectedId =>
          setActivePreset(presets.find(({ id }) => id === selectedId))
        }
      />
      <Pedal
        config={config}
        sweep={activePreset?.isSweep && activePreset}
        settings={activePreset?.settings || sweepSetting}
        onSelectSweep={setSweepSetting}
      />
    </>
  )
}

export default DemoController
