/**
 * Only InnerBlocks needed here.
 * 
 */

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { loop } = attributes;
  const blockProps = useBlockProps.save({
    className: 'keen-slider',
    'data-loop': loop
});
  return (
    <div {...blockProps} >
      <InnerBlocks.Content />
    </div>
  );
}
