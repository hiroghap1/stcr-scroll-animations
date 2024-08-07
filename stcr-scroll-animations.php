<?php
/**
 * Plugin Name:       Stcr Scroll Animations
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       stcr-scroll-animations
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function stcr_scroll_animations_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'stcr_scroll_animations_block_init' );

function enqueue_all_blocks_animations_assets() {
    wp_enqueue_script(
        'stcr-scroll-animations-view',
        plugins_url( 'build/view.js', __FILE__ ),
        array(),
        '0.1.0',
        true
    );
//    wp_enqueue_style(
//        'stcr-scroll-animations-style',
//        plugins_url( 'build/style.css', __FILE__ ),
//        array(),
//        '0.1.0'
//    );
}
add_action( 'wp_enqueue_scripts', 'enqueue_all_blocks_animations_assets' );
