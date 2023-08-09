import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls page somewhere, mostly used to scroll to top when the current page is changed
function ScrollPage(props) {
  let windowYTarget;
  const currentWindowY = window.scrollY;
  const currentPage = useLocation();

  switch(true) {
    // Simply scroll to the top
    case props.action === 'top':
      windowYTarget = 0;
      break;
    // Simply scroll to the bottom
    case props.action === 'bottom':
      windowYTarget = window.scrollY;
      break;
    // This is a tiny bit more complicated. First, check if it is a number
    case typeof(props.action) === 'number':
      switch(true) {
        // If the number is below 0, set it to 0 (scrolls to top)
        case props.action < 0:
          windowYTarget = 0;
          break;
        // If number is above the whole page's height, scroll to the bottom
        case props.action > currentWindowY:
          windowYTarget = currentWindowY;
          break;
        // If nothing is wrong, simply scroll to the specified number
        default:
          windowYTarget = props.action;
      }
      break;
    // If nothing is true, there's a problem with the code (or parameter passed)
    default:
      throw Error('Invalid action prop value. Value must either be "top", "bottom", or a number.');
  }

  useEffect(() => {
    window.scrollTo({top: windowYTarget, left: 0, behavior: 'instant'});
  }, [currentPage]);
}

export default ScrollPage;