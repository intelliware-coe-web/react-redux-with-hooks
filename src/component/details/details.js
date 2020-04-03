import React, { useRef } from 'react';
import * as UIkit from 'uikit';

export function Details({text= 'Details', children}) {
  const modalRef = useRef();

  return (
    <>
      <button className="uk-button uk-button-default" role="button" title="View country details" onClick={() => UIkit.modal(modalRef.current).show()}>
        {text}
      </button>
      <div ref={modalRef} role="dialog" className="uk-modal-container uk-flex-top" data-uk-modal={true}>
        <div className='uk-modal-dialog uk-margin-auto-vertical uk-padding-small'>
          {children}
          <button className="uk-modal-close-full uk-close-large" role="button" title="Close view country details" data-uk-close={true}/>
        </div>
      </div>
    </>
  );
}
