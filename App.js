//https://sbcode.net/threejs/object3d/
//AR, ThreeJS & VueJS: Del papel a la realidad aumentada
//https://viro-community.readme.io/docs/quick-start-windows
import React from "react";
import { View } from "react-native";
import Expo from "expo";
import * as THREE from "three";

import ExpoTHREE, { Renderer } from "expo-three";
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";


const App = () => {

  const onContextCreate = async (gl) => {
    //THREE.js code

    //GET scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    )

    gl.canvas = { with: gl.drawingBufferWidth, height: gl.drawingBufferHeight }
    camera.position.z = 2

    const renderer = new Renderer({ gl })
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 'blue'
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)


    const render = () => {
      requestAnimationFrame(render)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
      gl.endFrameEXP()
    }

    render()
  }

  return (
    <View>
      <GLView
        onContextCreate={onContextCreate}
        style={{ with: 500, height: 500 }}
      />
    </View>
  )
}

export default App;