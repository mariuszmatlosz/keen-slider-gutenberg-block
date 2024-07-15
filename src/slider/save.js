/**
 * Only InnerBlocks needed here.
 * 
 */

import { InnerBlocks } from '@wordpress/block-editor';

export default function save() {
  return (
    <div className="keen-slider">
      <InnerBlocks.Content />
    </div>
  );
}
