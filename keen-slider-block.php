<?php
/**
 * Plugin Name:       Keen slider
 * Plugin URI:        none
 * Description:       Main slider block (keen-slider)
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Mariusz
 * License:           no license
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       keen-slider-block
 *
 * @package KeenSliderBlock
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
function keen_slider_block_keen_slider_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'keen_slider_block_keen_slider_block_block_init' );
