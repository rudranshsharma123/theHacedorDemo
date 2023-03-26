import {
	Environment,
	Float,
	MeshReflectorMaterial,
	PresentationControls,
	Stage,
} from "@react-three/drei";
import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Chair from "./Chair";
import Plant from "./Plant";
import { useSelector } from "../context/SelectionContext";
function Experience() {
	const gltf = useLoader(GLTFLoader, "./models/chair.gltf");
	const { models, bgColor } = useSelector();

	return (
		<>
			<color attach="background" args={[bgColor.color]} />
			<fog attach="fog" args={[bgColor.color, 10, 20]} />
			<PresentationControls
				speed={1.5}
				global
				polar={[-0.1, Math.PI / 4]}
				rotation={[Math.PI / 8, Math.PI / 4, 0]}>
				<Stage environment="city" intensity={0.6} contactShadow={false}>
					<Suspense fallback={null}>
						<Float
							speed={1} // Animation speed, defaults to 1
							rotationIntensity={1} // XYZ rotation intensity, defaults to 1
							floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
							floatingRange={[0, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
						>
							{models === "chair" ? <Chair scale={0.8} /> : <Plant />}
						</Float>
					</Suspense>
				</Stage>
				<mesh rotation={[-Math.PI / 2, 0, 0]} position={(0, 0, -2.5)}>
					<planeGeometry args={[170, 170]} />
					<MeshReflectorMaterial
						blur={[300, 100]}
						resolution={2048}
						mixBlur={1}
						mixStrength={40}
						roughness={1}
						depthScale={1.2}
						minDepthThreshold={0.4}
						maxDepthThreshold={1.4}
						color="#101010"
						metalness={0.5}
					/>
				</mesh>
			</PresentationControls>{" "}
		</>
	);
}

export default Experience;
