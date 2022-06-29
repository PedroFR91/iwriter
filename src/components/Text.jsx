import React from 'react';

import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../tools/tools';

const ReactEditorJS = createReactEditorJS();

function Text(props) {
  return (
    <div style={{ width: '60%', margin: '10% auto', color: props.color }}>
      <ReactEditorJS tools={EDITOR_JS_TOOLS} />
    </div>
  );
}

export default Text;
