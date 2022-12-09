/* Internal block libraries */
const { __ } = wp.i18n;
import { FormToggle } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';


// Calculation Functions
import calculated from "../src/library/calculated/calculated";

// Custom Fucntions
// import calculatedBgImage from "../src/library/calculated/calculatedBgImage";
// // import calculatedBgColor from "../src/library/calculated/calculatedBgColor";
// import calculatedBGIMGSize from "../src/library/calculated/calculatedBGIMGSize";
// import calculatedBgPos from "../src/library/calculated/calculatedBgPos";
// import calculatedBGIMGAtt from "../src/library/calculated/calculatedBGIMGAtt";
// import calculatedBGIMGRepeat from "../src/library/calculated/calculatedBGIMGRepeat";

/* Create a Block Controls wrapper Component */
/**
 * Class
 */

function replaceAll(string, search, replace) {
	return string.split(search).join(replace);
}
  
export default class InlineStyleVars extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		const {
			attributes: {
				styleEnabled,
				babygradient,
				dropcapColor,
				bgColorEnabled,
				blockID,
				bgImage,
				headlineColor,
				foregroundColor,
				linkColor,
				backgroundColor3,
				selectionFGColor,
				selectionBGColor,
				spacingMobile,
				spacingTablet,
				spacingDesktop
			},
			setAttributes
		} = this.props;

		const toggleStyleEnabled = () => setAttributes({ styleEnabled: !styleEnabled });

		// boop
		const bgImageStack = calculated.calculatedBgImage(this.props.attributes);
		const bgColorStack = calculated.calculatedBgColor(this.props.attributes);
		const bgSize = calculated.calculatedBGIMGSize(this.props.attributes, 'lg');
		const bgPosition = calculated.calculatedBgPos(this.props.attributes);
		const bgAttachment = calculated.calculatedBGIMGAtt(this.props.attributes);
		const bgRepeat = calculated.calculatedBGIMGRepeat(this.props.attributes);


		// body[data-color='custom'] 
		// body[data-color='custom'] 
        const styleObj = { 
            '--backgroundImage': bgImageStack,
            '--foregroundColor': foregroundColor, 
            '--backgroundColor': backgroundColor,
            '--headlineColor': headlineColor,
            '--linkColor': linkColor
        };

        // console.log('meep' );
		return styleObj
	}
}