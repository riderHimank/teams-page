import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Background from "./Background";
import Box from "./Box";
import { Scroll, ScrollControls } from "@react-three/drei";

const App = () => {
  const controlsRef = useRef();
  return (
    <div className="wrapper">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 70,
          aspect: window.innerWidth / window.innerHeight,
          zoom: 1,
        }}
      >
        <ScrollControls pages={2}>
          <Scroll>
            <Suspense fallback={null}>
              {/* <OrbitControls
          ref={controlsRef}
          enableDamping={true}
          enableZoom={true}
        /> */}
              <ambientLight intensity={0.5} />
              <directionalLight intensity={0.8} position={[5, 5, 5]} />
              <Background enableZoom rotation={[0, Math.PI / 2, 0]} />
              <Box />
            </Suspense>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
