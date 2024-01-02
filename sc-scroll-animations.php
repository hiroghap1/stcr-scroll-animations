<?php
/*
Plugin Name: SC Scrolls Animations
Description: GitHub Actions を実行するボタンを設置します
Version: 0.1.0
Author: HASEGAWA Yoshihiro in Stella Create Inc.
License: GPLv2
*/

// ファイルを管理画面にロード
function load_sc_scroll_animations_script() {
    // メニューページ 'github-actions' でのみスクリプトをロード
    if (isset($_GET['page']) && $_GET['page'] === 'github-actions') {
        wp_enqueue_style('sc-scroll-animations-style', plugin_dir_url(__FILE__) . 'css/sc-scroll-animations-style.css');
        wp_enqueue_script('sc-scroll-animations-script', plugin_dir_url(__FILE__) . 'js/sc-scroll-animations-script.js', array(), null, true);
    }
}
add_action('admin_enqueue_scripts', 'load_sc_scroll_animations_script');

