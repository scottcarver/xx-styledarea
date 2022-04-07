<?php
/**
 * Plugin Name:       Styled Area Block
 * Description:       A full, reusable set of background/foreground CSS for a thematicly styled area.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       styled
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 */
function create_block_xx_deluxestyled_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_xx_deluxestyled_block_init' );

// Define Styled Posttype
require( __DIR__ . '/xx-styled-posttype.php');

// Define Meta Fields
require( __DIR__ . '/xx-styled-meta.php');







/* Not Clear if this is needed */
/*
function myprefix_enqueue_assets() {
    wp_enqueue_script(
        'myprefix-gutenberg-sidebar',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-plugins', 'wp-edit-post', 'wp-element', 'wp-components', 'wp-data' )
    );
}
add_action( 'enqueue_block_editor_assets', 'myprefix_enqueue_assets' );
*/