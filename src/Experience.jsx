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
    <Canvas shadows camera={{ position: [3, 0.8, 5], fov: 35 }} >
      <SoftShadows intensity={ 20 } />
        <KeyboardModel />
      <OrbitControls target={[0, 0, 0]} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 2} enableZoom={ false } enableRotate={ true } />
      <Environment preset='sunset' />
      </Canvas>
      </>
  )
}