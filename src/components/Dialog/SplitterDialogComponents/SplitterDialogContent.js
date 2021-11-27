/* React Main Needs */
import React, { useContext } from 'react';
import { SplitterDialogContext } from '../SplitterDialogContext/SplitterDialogProvider';
import { ScrollPanel } from 'primereact/scrollpanel';
import PropTypes from 'prop-types';

/* Component Function */
const SplitterDialogContent = (props) => {
  const [state] = useContext(SplitterDialogContext);

  console.log(props, ':11');
  console.log(state?.activeIndex, ':12');
  const PageContent = props?.PageContent;

  return (
    <ScrollPanel style={{ width: '100%', height: '85%' }}>
      {PageContent}
    </ScrollPanel>
  );
};

SplitterDialogContent.propTypes = {
  PageContent: PropTypes.element.isRequired,
};

export default SplitterDialogContent;
// {state?.activeIndex === 0 && (
//   <div className="bg-blue-100 h-full">{state?.count} sayıldı</div>
// )}
// {state?.activeIndex === 1 && (
//   <div className="bg-green-100 h-full">{state?.count} sayıldı</div>
// )}
// {state?.activeIndex === 2 && (
//   <div className="bg-yellow-100 h-full">{state?.count} sayıldı</div>
// )}
// {state?.activeIndex === 3 && (
//   <div className="bg-pink-100 h-full">{state?.count} sayıldı</div>
// )}
