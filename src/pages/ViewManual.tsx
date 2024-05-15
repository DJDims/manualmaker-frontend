import React from 'react'
import { useParams } from 'react-router-dom';

export default function ViewManual() {
	const {manualId} = useParams();
  return (
	<>
	  <div className="view_manual">
	  <h1></h1>
	  <h3></h3>
	  <div className="viewPort">
		<div className="sideMenu">

		</div>
		<div className="steps">
			<div className="step">
				<h2></h2>
				<p></p>
				<div className="code"></div>
			</div>
		</div>
	  </div>
	  </div>
	</>
  )
}
