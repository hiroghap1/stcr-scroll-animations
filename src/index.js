import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, BaseControl, Button } from '@wordpress/components';
import './style.scss';

// アニメーションのオプションと画像
const animations = [
	{ label: 'フェードイン', value: 'fadeIn', imageUrl: '/wp-content/plugins/your-plugin/images/blur.jpg' },
	{ label: 'バウンス', value: 'bounce', imageUrl: '/wp-content/plugins/your-plugin/images/bounce.jpg' },
	{ label: 'グライド', value: 'glide', imageUrl: '/wp-content/plugins/your-plugin/images/glide.jpg' },
	{ label: 'スピン', value: 'spin', imageUrl: '/wp-content/plugins/your-plugin/images/spin.jpg' },
	{ label: 'フロート', value: 'float', imageUrl: '/wp-content/plugins/your-plugin/images/float.jpg' },
	{ label: 'ズーム', value: 'zoom', imageUrl: '/wp-content/plugins/your-plugin/images/zoom.jpg' },
	{ label: 'フリップ', value: 'flip', imageUrl: '/wp-content/plugins/your-plugin/images/flip.jpg' },
	{ label: 'スライド', value: 'slide', imageUrl: '/wp-content/plugins/your-plugin/images/slide.jpg' },
];

// ブロック属性にアニメーション属性を追加
const addAnimationAttribute = (settings) => {
	if (typeof settings.attributes !== 'undefined') {
		settings.attributes = {
			...settings.attributes,
			animationType: {
				type: 'string',
				default: '',
			},
		};
	}
	return settings;
};
addFilter('blocks.registerBlockType', 'all-blocks-animations/attribute', addAnimationAttribute);

// インスペクタコントロールにアニメーション選択を追加
const addAnimationControl = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { attributes, setAttributes } = props;
		const { animationType } = attributes;

		const onSelectAnimation = (value) => {
			setAttributes({ animationType: value });
		};

		return (
			<>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody title="アニメーション設定">
						<BaseControl label="アニメーションの種類を選択してください。">
							<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
								{animations.map(animation => (
									<Button
										key={animation.value}
										onClick={() => onSelectAnimation(animation.value)}
										isPrimary={animationType === animation.value}
										style={{ padding: 0, border: animationType === animation.value ? '2px solid blue' : '2px solid transparent' }}
									>
										<img src={animation.imageUrl} alt={animation.label} style={{ width: '100%', height: 'auto' }} />
									</Button>
								))}
							</div>
						</BaseControl>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, 'addAnimationControl');
addFilter('editor.BlockEdit', 'all-blocks-animations/inspector', addAnimationControl);

// 保存時にアニメーション属性をデータ属性として追加
const addSaveProps = (extraProps, blockType, attributes) => {
	if (attributes.animationType) {
		extraProps['data-stcr-animation-type'] = attributes.animationType;
	}
	return extraProps;
};
addFilter('blocks.getSaveContent.extraProps', 'all-blocks-animations/save-props', addSaveProps);
