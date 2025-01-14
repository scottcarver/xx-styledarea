// Node modules
import classnames from "classnames";

// WordPress Modules
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

// Custom modules
import calculated from "../src/library/calculated/calculated";

// Export Save Function
export default function save(props) {
	
	// Destructure props
	const {
		attributes: {
			clientUUID,
			namedStyle,
			styleMode,
			fgHeadlineFont,
			fgCopyFont,
			fgCaptionFont
		},
		clientId
	} = props;

	// Retrieve Inline CSS using helper function
	const inlineVarCSS =  calculated.calculatedInlineVars(props.attributes);
	const isEnabled = styleMode !== 'disabled';

	// Set classnames (font-classes allow for fine-tuning)
	const classes = classnames(
		"xx-styled",
		"xx-styled--block",
		clientUUID,
		{[`xx-styled--headlinefont-${fgHeadlineFont}`]: (fgHeadlineFont !== 'inherit' && fgHeadlineFont && isEnabled)},
		{[`xx-styled--copyfont-${fgCopyFont}`]: (fgCopyFont !== 'inherit' && fgCopyFont && isEnabled) },
		{[`xx-styled--captionfont-${fgCaptionFont}`]: (fgCaptionFont !== 'inherit' && fgCaptionFont && isEnabled) }
	);

	// Create a BlockProps Object
	const blockProps = {
		className: classes,
		// id: "yep",
	}

	// Conditionally add style
	if(inlineVarCSS){ blockProps['style'] = inlineVarCSS; }

	// Conditionally add data-theme
	if(styleMode == 'named'){  blockProps['data-theme'] = namedStyle; }
	
	// Save BlockProps and InnerBlocks content
	return (
		<div {...useBlockProps.save(blockProps)}>
			<InnerBlocks.Content />
		</div>
	);
}
