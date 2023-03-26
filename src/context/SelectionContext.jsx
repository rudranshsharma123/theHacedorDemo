import React, { createContext, useContext, useState } from "react";

const SelectionContext = createContext({});
const chairColors = [
	{
		color: "#683434",
		name: "brown",
	},
	{
		color: "#1a5e1a",
		name: "green",
	},
	{
		color: "#659994",
		name: "blue",
	},
	{
		color: "#896599",
		name: "mauve",
	},
	{
		color: "#ffa500",
		name: "orange",
	},
	{
		color: "#59555b",
		name: "grey",
	},
	{
		color: "#222222",
		name: "black",
	},
	{
		color: "#ececec",
		name: "white",
	},
];

const cushionColors = [
	{
		color: "#683434",
		name: "brown",
	},
	{
		color: "#1a5e1a",
		name: "green",
	},
	{
		color: "#659994",
		name: "blue",
	},
	{
		color: "#896599",
		name: "mauve",
	},
	{
		color: "#ffa500",
		name: "orange",
	},
	{
		color: "#59555b",
		name: "grey",
	},
	{
		color: "#222222",
		name: "black",
	},
	{
		color: "#ececec",
		name: "white",
	},
];

const shownModel = ["chair", "plant"];

const shownBGColor = [
	{
		color: "#683434",
		name: "brown",
	},
	{
		color: "#1a5e1a",
		name: "green",
	},
	{
		color: "#659994",
		name: "blue",
	},
	{
		color: "#896599",
		name: "mauve",
	},
	{
		color: "#ffa500",
		name: "orange",
	},
	{
		color: "#59555b",
		name: "grey",
	},
	{
		color: "#222222",
		name: "black",
	},
	{
		color: "#ececec",
		name: "white",
	},
];

export const SelectionContextProvider = (props) => {
	const [material, setMaterial] = useState("leather");
	const [legs, setLegs] = useState(1);
	const [chairColor, setChairColor] = useState(chairColors[0]);
	const [cushionColor, setCushionColor] = useState(cushionColors[0]);
	const [models, setModels] = useState(shownModel[0]);
	const [bgColor, setBGColor] = useState(shownBGColor[0]);
	return (
		<SelectionContext.Provider
			value={{
				material,
				setMaterial,
				legs,
				setLegs,
				chairColor,
				setChairColor,
				cushionColors,
				chairColors,
				cushionColor,
				setCushionColor,
				models,
				setModels,
				bgColor,
				setBGColor,
				shownBGColor,
			}}>
			{props.children}
		</SelectionContext.Provider>
	);
};

export const useSelector = () => {
	const context = useContext(SelectionContext);
	return context;
};
