<?php
/*
Plugin Name: SC Scrolls Animations
Description: スクロールアニメーションを簡単に設定します
Version: 0.1.0
Author: HASEGAWA Yoshihiro in Stella Create Inc.
License: GPLv2
*/

add_action('wp_enqueue_scripts', 'add_styles');
function add_styles() {
    wp_enqueue_style('sc-scroll-animations-style', plugin_dir_url(__FILE__) . 'css/sc-scroll-animations-style.css');
}
function load_sc_scroll_animations_script() {
    wp_enqueue_script('sc-scroll-animations-script', plugin_dir_url(__FILE__) . 'js/sc-scroll-animations-script.js', array(), null, array( 'strategy' => 'defer' ));
}
add_action( 'enqueue_block_editor_assets', 'load_sc_scroll_animations_script' );

add_action(
    'enqueue_block_editor_assets',
    function() {
        wp_enqueue_style('sc-scroll-animations-style', plugin_dir_url(__FILE__) . 'css/sc-scroll-animations-style.css');
    }
);