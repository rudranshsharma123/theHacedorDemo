import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useSelector } from "../context/SelectionContext";
export default function Plant(props) {
	const { nodes, materials } = useGLTF("./models/plant.gltf");
	const { material, chairColor, cushionColor } = useSelector();

	const leatherTextureProps = useTexture({
		// map: "./textures/leather/Leather_008_Base Color.jpg",
		normalMap: "./textures/leather/Leather_008_Normal.jpg",
		roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
		aoMap: "./textures/leather/Leather_008_Ambient Occlusion.jpg",
	});
	const fabricTextureProps = useTexture({
		// map: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
		normalMap: "./textures/fabric/Fabric_Knitted_006_normal.jpg",
		roughnessMap: "./textures/fabric/Fabric_Knitted_006_roughness.jpg",
		aoMap: "./textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
	});
	leatherTextureProps.normalMap.repeat.set(3, 3);
	leatherTextureProps.roughnessMap.repeat.set(3, 3);
	leatherTextureProps.aoMap.repeat.set(3, 3);
	// leatherTextureProps.map.wrapS =
	// leatherTextureProps.map.wrapT =
	//   THREE.MirroredRepeatWrapping;
	leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
		THREE.MirroredRepeatWrapping;
	leatherTextureProps.roughnessMap.wrapS =
		leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
	leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
		THREE.RepeatWrapping;
	fabricTextureProps.normalMap.repeat.set(3, 3);
	fabricTextureProps.roughnessMap.repeat.set(3, 3);
	fabricTextureProps.aoMap.repeat.set(3, 3);
	// fabricTextureProps.map.wrapS =
	// fabricTextureProps.map.wrapT =
	//   THREE.RepeatWrapping;
	fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
		THREE.RepeatWrapping;
	fabricTextureProps.roughnessMap.wrapS =
		fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
	fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
		THREE.RepeatWrapping;
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.potted_plant_01_stem.geometry}
				material={materials.potted_plant_01_pot}
			/>
			<mesh
				geometry={nodes.potted_plant_01_pebbles.geometry}
				material={materials.potted_plant_01_pot}
				position={[0, -0.01, 0]}
			/>
			<mesh geometry={nodes.potted_plant_01_pot.geometry}>
				<meshStandardMaterial
					{...(material === "leather"
						? leatherTextureProps
						: fabricTextureProps)}
					color={chairColor.color}
				/>
			</mesh>
			<mesh geometry={nodes.potted_plant_01_leaves.geometry}>
				<meshStandardMaterial
					{...(material === "leather"
						? leatherTextureProps
						: fabricTextureProps)}
					color={cushionColor.color}
				/>
			</mesh>
		</group>
	);
}

useGLTF.preload("./models/plant.gltf");
