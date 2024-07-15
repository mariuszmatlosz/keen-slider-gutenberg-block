import { InnerBlocks } from '@wordpress/block-editor';

export default function save() {
  return (
    <div className="keen-slider__slide">
      <InnerBlocks.Content />
    </div>
  );
}