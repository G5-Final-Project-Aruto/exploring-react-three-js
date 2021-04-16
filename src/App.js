import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { useSelector, useDispatch } from "react-redux";

import { Item, ColorPicker } from "./components";

export default function App() {
  const [zoom, setZoom] = useState(1);
  const item = useSelector((state) => state.items.data);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{ marginRight: 10, fontSize: 32 }}
          onClick={() => setZoom(zoom + 0.05)}
        >
          +
        </button>
        <button style={{ fontSize: 32 }} onClick={() => setZoom(zoom - 0.05)}>
          -
        </button>
      </div>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Item zoom={zoom} />
          <Environment preset="city" />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.8, 0]}
            opacity={0.25}
            width={10}
            height={10}
            blur={1.5}
            far={0.8}
          />
        </Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
      <ColorPicker />
    </div>
  );
}
