import React from "react";
import { useSelector } from "../context/SelectionContext";

function SelectionContainer() {
	const {
		material,
		setMaterial,
		legs,
		setLegs,
		chairColors,
		chairColor,
		setChairColor,
		cushionColor,
		cushionColors,
		setCushionColor,
		models,
		setModels,
		bgColor,
		setBGColor,
		shownBGColor,
	} = useSelector();

	return (
		<div className="selectionContainer">
			<div className="container__section">
				<div className="container__section__values__main">
					<div
						className={`item__main ${models === "chair" ? "item--active" : ""}`}
						onClick={() => {
							setModels("chair");
						}}>
						<div className="item__label__main">Chair</div>
					</div>
					<div
						className={`item__main ${models === "plant" ? "item--active" : ""}`}
						onClick={() => {
							setModels("plant");
						}}>
						<div className="item__label__main">Plant</div>
					</div>
				</div>
				<div className="container__section__title">
					{models === "chair" ? "Chair" : "Plant"} Material
				</div>
				<div className="container__section__values">
					<div
						className={`item ${material === "leather" ? "item--active" : ""}`}
						onClick={() => {
							setMaterial("leather");
						}}>
						<div className="item__label">Leather</div>
					</div>
					<div
						className={`item ${material === "fabric" ? "item--active" : ""}`}
						onClick={() => {
							setMaterial("fabric");
						}}>
						<div className="item__label">Fabric</div>
					</div>
				</div>
			</div>
			{models === "chair" ? (
				<div className="container__section">
					<div className="container__section__title">Legs</div>
					<div className="container__section__values">
						<div
							className={`item ${legs === 1 ? "item--active" : ""}`}
							onClick={() => {
								setLegs(1);
							}}>
							<div className="item__label">Design</div>
						</div>
						<div
							className={`item ${legs === 0 ? "item--active" : ""}`}
							onClick={() => {
								setLegs(0);
							}}>
							<div className="item__label">Classic</div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
			<div className="container__section">
				<div className="container__section__title">Background Color</div>
				<div className="container__section__values">
					{shownBGColor.map((item, index) => (
						<div
							key={index}
							className={`item ${
								item.color === bgColor.color ? "item--active" : ""
							}`}
							onClick={() => {
								setBGColor(item);
								console.log(bgColor);
							}}>
							<div
								className="item__dot"
								style={{ backgroundColor: item.color }}
							/>
							<div className="item__label">{item.name}</div>
						</div>
					))}
				</div>
			</div>
			<div className="container__section">
				<div className="container__section__title">
					{models === "chair" ? "Chair" : "Pot"} Color
				</div>
				<div className="container__section__values">
					{chairColors.map((item, index) => (
						<div
							key={index}
							className={`item ${
								item.color === chairColor.color ? "item--active" : ""
							}`}
							onClick={() => setChairColor(item)}>
							<div
								className="item__dot"
								style={{ backgroundColor: item.color }}
							/>
							<div className="item__label">{item.name}</div>
						</div>
					))}
				</div>
			</div>
			<div className="container__section">
				<div className="container__section__title">
					{models === "chair" ? "Cushion" : "Leaf"} Color
				</div>
				<div className="container__section__values">
					{cushionColors.map((item, index) => (
						<div
							key={index}
							className={`item ${
								item.color === cushionColor.color ? "item--active" : ""
							}`}
							onClick={() => setCushionColor(item)}>
							<div
								className="item__dot"
								style={{ backgroundColor: item.color }}
							/>
							<div className="item__label">{item.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SelectionContainer;
