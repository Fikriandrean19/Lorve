'use client'

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useState } from 'react'
import { SCENES, SceneConfig } from '@/app/(marketing)/data/scene'

function PanoramaSphere({ image }: { image: string }) {
  const texture = useLoader(THREE.TextureLoader, image)
  texture.colorSpace = THREE.SRGBColorSpace

  return (
    <mesh>
      <sphereGeometry args={[50, 32, 32]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  )
}

export default function Panorama() {
  const [activeScene, setActiveScene] =
    useState<SceneConfig>(SCENES[0])

  return (
    <div className="relative h-full w-full">
      <Canvas
        style={{ height: '100%', width: '100%', background: '#000' }}
        camera={{ fov: 75, position: [0, 0, 0.1] }}
      >
        <PanoramaSphere image={activeScene.image} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* BUTTON SCENE */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                      flex gap-2 flex-wrap justify-center z-10">
        {SCENES.map(scene => (
          <button
            key={scene.id}
            onClick={() => setActiveScene(scene)}
            className={`px-3 py-2 text-sm rounded-lg
              ${scene.id === activeScene.id
                ? 'bg-black text-white'
                : 'bg-white/80'}`}
          >
            {scene.name}
          </button>
        ))}
      </div>
    </div>
  )
}
