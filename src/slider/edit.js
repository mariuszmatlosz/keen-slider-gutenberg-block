import { useEffect } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

export default function Edit() {
	useEffect(() => {
	  let slider = null;
	  const sliderContainer = document.querySelector('.keen-slider');
  
	  if (sliderContainer) {
		slider = new KeenSlider(sliderContainer);
	  }
  
	  return () => {
		if (slider) {
		  slider.destroy();
		}
	  };
	}, []);
  
	return (
	  <div className="keen-slider">
            <InnerBlocks
                allowedBlocks={['core/cover', 'core/image']}
                template={['core/cover']}
                templateLock="insert"
            />
	  </div>
	);
  }
  