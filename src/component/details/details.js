import React, { useRef } from 'react';
import * as UIkit from 'uikit';

export function Details({children}) {
  const modalRef = useRef();

  return (
    <>
      <button className="uk-button uk-button-default" onClick={() => UIkit.modal(modalRef.current).show()}>Details
      </button>
      <div ref={modalRef} className="uk-modal-container uk-flex-top" data-uk-modal={true}>
        <div className='uk-modal-dialog uk-margin-auto-vertical uk-padding-small'>
          {children}
          <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close={true}/>
        </div>
      </div>
    </>
  );
}
