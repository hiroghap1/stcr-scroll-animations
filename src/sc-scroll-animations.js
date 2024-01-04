// sc-scroll-animations.js

const { registerBlockType } = wp.blocks;
const { TextControl, PanelBody, InspectorControls, SelectControl } = wp.components;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;

const animations = [
    { label: 'フェードイン', value: 'fadeIn', imageUrl: '/wp-content/plugins/sc-scroll-animations/images/blur.jpg' },
    { label: 'バウンス', value: 'Bounce', imageUrl: '/wp-content/plugins/sc-scroll-animations/images/bounce.jpg' },
    { label: 'グライド', value: 'Glide', imageUrl: '/wp-content/plugins/sc-scroll-animations/images/glide.jpg' },
    { label: 'スピン', value: 'Spin', imageUrl: '/wp-content/plugins/sc-scroll-animations/images/spin.jpg' },
    { label: 'フロート', value: 'Float', imageUrl: '/wp-content/plugins/sc-scroll-animations/images/float.jpg' },
    { label: 'ズーム', value: 'Zoom', imageUrl: '/wp-content/plugins/sc-scroll-animations/images/zoom.jpg' },
    { label: 'フリップ', value: 'Flip', imageUrl: '/wp-content/plugins/sc-scroll-animations/images/flip.jpg' },
    { label: 'スライド', value: 'Slide', imageUrl: '/wp-content/plugins/sc-scroll-animations/images/slide.jpg' },
];

const scrollAnimationControls = wp.compose.createHigherOrderComponent(function(BlockEdit){
    return function(props) {
        const { attributes, setAttributes } = props;

        const onSelectAnimation = (selectedAnimation) => {
            // Handle the selected animation
            setAttributes({ animationType: selectedAnimation });
        };

        const onSelectSpeed = (selectedSpeed) => {
            // Handle the selected speed
            setAttributes({ animationSpeed: selectedSpeed });
        };

        const controlButtons = wp.element.createElement(
            wp.components.PanelBody,
            {
                title: 'SC Scroll Animations',
            },
            wp.element.createElement(
                wp.components.BaseControl,
                {
                    label: 'アニメーションの種類を選択してください。'
                },
                wp.element.createElement(
                    wp.components.ButtonGroup,
                    {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3,1fr)',
                            gap: '10px',
                        }
                    },
                    animations.map((animation) => (
                        wp.element.createElement(
                            wp.components.Button,
                            {
                                key: animation.value,
                                value: animation.value,
                                isSmall: true,
                                onClick: () => onSelectAnimation(animation.value),
                                isPrimary: attributes.animationType === animation.value,
                                style: {
                                    height: 'auto', // 正方形に調整
                                    padding: '0', // パディングをリセット
                                    flexDirection: 'column',
                                    boxShadow: 'none',
                                },
                            },
                            wp.element.createElement('img', {
                                src: animation.imageUrl,
                                alt: animation.label,
                                style: {
                                    maxWidth: '100%',
                                    height: 'auto',
                                    display: 'block',
                                }
                            }),
                            wp.element.createElement('span', {
                                style: {
                                    display: 'block',
                                }
                            },animation.label)
                        )
                    ))
                )
            )
        );
        return wp.element.createElement(
            wp.element.Fragment,
            {},
            wp.element.createElement(
                BlockEdit,
                props,
            ),
            wp.element.createElement(
                wp.blockEditor.InspectorControls,
                {
                    initialOpen: false,
                },
                controlButtons,
            ),
        );
    };
}, 'scrollAnimationControls');
wp.hooks.addFilter('editor.BlockEdit', 'sc-scroll-animations/add-scroll-animations', scrollAnimationControls);