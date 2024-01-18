import React, { Component,useEffect } from 'react'

import '../node_modules/react-dat-gui/build/react-dat-gui.css'

import FluidAnimation from './components/react-fluid-animation'
// import Webgl from './trial/modules/WebGL'

// import image from './lena.png'

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.90,
  velocityDissipation: 0.94,
  pressureDissipation: 0.36,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.01
}

export default class App extends Component {
  state = {
    config: {
      ...defaultConfig
    }
  }
  componentDidMount(){

  }

  render () {
    const {
      config
    } = this.state

    return (
      <div
        style={{
          height: '100vh'
        }}
      >
        <FluidAnimation
          config={config}
          animationRef={this._animationRef}
        />

        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: '1em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            pointerEvents: 'none'
          }}
        >
          <h1
            style={{
              fontSize: '3em',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
            }}
          >
            Esummit 2024
          </h1>
        </div>


        
      </div>
    )
  }

  _animationRef = (ref) => {
    this._animation = ref
  }

  _onUpdate = (config) => {
    this.setState({ config })
  }

  _onClickRandomSplats = () => {
    this._animation.addSplats(5 + Math.random() * 20 | 0)
  }

  _onReset = () => {
    this.setState({ config: { ...defaultConfig } })
  }
}
