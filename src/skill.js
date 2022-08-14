import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './skills.scss';

function Skill() {
    return (
        <>
	<div class="container__progressbars">

        <div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-react shadow-react"> </circle>
			</svg>
			<span class="progressbar__text shadow-react">React.js</span>
		</div>

        <div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-js shadow-js"> </circle>
			</svg>
			<span class="progressbar__text shadow-js">JavaScript</span>
		</div>

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
			</svg>
			<span class="progressbar__text shadow-html">HTML</span>
		</div>

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-css shadow-css"> </circle>
			</svg>
			<span class="progressbar__text shadow-css">CSS</span>
		</div>

        <div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-bootstrap shadow-bootstrap"> </circle>
			</svg>
			<span class="progressbar__text shadow-bootstrap">Bootstrap</span>
		</div>

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-scss shadow-scss"> </circle>
			</svg>
			<span class="progressbar__text shadow-scss">SCSS</span>
		</div>

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-ts shadow-ts"> </circle>
			</svg>
			<span class="progressbar__text shadow-ts">TypeScript</span>
		</div>

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-node shadow-node"> </circle>
			</svg>
			<span class="progressbar__text shadow-node">Node.js</span>
		</div>

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-python shadow-python"> </circle>
			</svg>
			<span class="progressbar__text shadow-python">Python</span>
		</div>
		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-django shadow-django"> </circle>
			</svg>
			<span class="progressbar__text shadow-django">Django</span>
		</div>
	</div>
        </>
    );
}

export default Skill;