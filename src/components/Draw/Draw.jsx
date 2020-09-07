import React from "react";
import "./Draw.css";
const Draw = ({ array }) => {
	return (
		<div>
			<div className="outer">
				{array.map((item, key) => {
					return (
						<div
							className="item"
							key={key}
							style={{
								height: `${item}rem`,
							}}
						>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Draw;
