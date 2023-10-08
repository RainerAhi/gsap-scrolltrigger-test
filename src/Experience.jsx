import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, Lightformer, MeshReflectorMaterial, Sparkles, Float, MeshPortalMaterial, useTexture, useHelper, Stage, SoftShadows } from '@react-three/drei'
import { easing } from 'maath'
import KeyboardModel from './Keyboard'
import * as THREE from "three"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {

  return (
    <>
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 35 }} >
      <SoftShadows intensity={ 20 } />
      <CameraRig>
        <KeyboardModel />
        </CameraRig>
      <OrbitControls target={[0, 0, 0]} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 2} enableZoom={ false } enableRotate={ true } />
      <Environment preset='sunset' />
      </Canvas>
      </>
  )
}

function CameraRig({ children }) {
  const group = useRef()
  useFrame((state, delta) => {
    easing.dampE(group.current.rotation, [0, -state.pointer.x / 10, 0], 0.5, delta)
  })
  return <group ref={group}>{children}</group>
}