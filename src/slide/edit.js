import './editor.scss';
import { InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['core/cover', 'core/image'];
const TEMPLATE = [[ALLOWED_BLOCKS[0]]];

export default function Edit() {
  return (
    <div className="keen-slider__slide">
            <InnerBlocks
                allowedBlocks={ALLOWED_BLOCKS}
                template={TEMPLATE}
                templateLock="insert"
            />
    </div>
  );
}
