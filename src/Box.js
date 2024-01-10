import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = () => {
    const boxRef = useRef();
    useFrame((state) => {
      boxRef.current.geometry.args = [
        3 * Math.sin(state.clock.elapsedTime),
        3 * Math.sin(state.clock.elapsedTime),
        3 * Math.sin(state.clock.elapsedTime),
      ];
    });
    return (
      <mesh ref={boxRef}>
        <boxGeometry args={[3, 3, 3]} position={[0, 0, 0]} />
        <meshStandardMaterial color="#000" />
      </mesh>
    );
}
 
export default Box;