import { useEffect, useState } from '@wordpress/element';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, PanelBody } from '@wordpress/components';
import KeenSlider from 'keen-slider';

export default function Edit({ attributes, setAttributes }) {
    const { loop } = attributes;
    const [slider, setSlider] = useState(null);

    useEffect(() => {
        const sliderContainer = document.querySelector('.keen-slider-block');

        if (sliderContainer && !slider) {
            const newSlider = new KeenSlider(sliderContainer, {
                loop: loop,
            });

            setSlider(newSlider);
        }

        return () => {
            if (slider) {
                slider.destroy();
            }
        };
    }, [loop]);

    return (
        <>
            <InspectorControls>
                <PanelBody title="Slider Settings">
                    <ToggleControl
                        label="Enable Loop"
                        checked={loop}
                        onChange={() => setAttributes({ loop: !loop })}
                    />
                </PanelBody>
            </InspectorControls>
            <div className="keen-slider-block">
                <InnerBlocks
                    allowedBlocks={['core/cover', 'core/image']}
                    template={[['core/cover']]}
                    templateLock="insert"
                />
            </div>
        </>
    );
}
