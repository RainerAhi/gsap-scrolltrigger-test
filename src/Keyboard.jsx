import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three"

export default function KeyboardModel(props) {
  const { nodes, materials } = useGLTF("./minikeyboard.glb");

  return (
    <group {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        position={[0.134, 0.123, -0.066]}
        scale={[1.498, 0.092, 0.944]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Material}
        position={[-0.042, 0.057, 0.015]}
        scale={[0.239, 0.104, 0.239]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials["Material.004"]}
        position={[-0.916, 0.466, 0.378]}
        scale={[0.147, 0.104, 0.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Material}
        position={[1.124, 0.381, -0.635]}
        scale={[0.147, 0.104, 0.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.Material}
        position={[1.149, 0.385, -0.637]}
        scale={[0.21, 0.149, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials["Material.004"]}
        position={[-0.422, 0.408, -0.622]}
        scale={[0.147, 0.104, 0.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials["Material.004"]}
        position={[0.084, 0.401, -0.622]}
        scale={[0.147, 0.104, 0.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials["Material.004"]}
        position={[0.57, 0.394, -0.622]}
        scale={[0.147, 0.104, 0.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials["Material.004"]}
        position={[-0.258, 0.399, -0.128]}
        scale={[0.147, 0.104, 0.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials["Material.004"]}
        position={[0.236, 0.403, -0.117]}
        scale={[0.147, 0.104, 0.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.Material}
        position={[0.26, 0.398, 0.378]}
        rotation={[-Math.PI, 0.783, 0]}
        scale={[-0.069, 0.049, 0.069]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.Material}
        position={[0.729, 0.489, -0.087]}
        rotation={[0, 0.785, -Math.PI]}
        scale={[-0.069, 0.069, 0.069]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.Material}
        position={[0.729, 0.398, 0.362]}
        rotation={[Math.PI, -0.785, 0]}
        scale={[-0.069, 0.049, 0.069]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.Material}
        position={[1.201, 0.398, 0.378]}
        rotation={[0, -0.783, -Math.PI]}
        scale={[-0.069, 0.049, 0.069]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials["Material.002"]}
        position={[-0.921, 0.288, -0.608]}
        scale={[0.239, 0.104, 0.239]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials["Material.003"]}
        position={[-0.59, 0.288, 0.387]}
        scale={[0.578, 0.104, 0.239]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials["Material.004"]}
        position={[-0.93, 0.415, -0.601]}
        scale={[0.149, 0.106, 0.149]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials["Material.004"]}
        position={[-0.944, 0.406, -0.118]}
        scale={[0.119, 0.084, 0.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials["Material.001"]}
        position={[0.73, 0.288, 0.264]}
        scale={[0.239, 0.104, 0.239]}
      />
    </group>
  );
}

useGLTF.preload("./minikeyboard.glb");
