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

//function enqueue_custom_options_script()
//{
//    wp_enqueue_script(
//        'sc-scroll-animations-script',
//        plugin_dir_url(__FILE__) . 'dist/sc-scroll-animations.js',
//        array(), // 依存関係があれば指定
//        null, // バージョン番号を指定しない
//        true // true に設定すると </body> タグの前にスクリプトが挿入される
//    );
//}
//add_action('enqueue_block_assets', 'enqueue_custom_options_script');
