import React from 'react';

import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../tools/tools';

const ReactEditorJS = createReactEditorJS();

function Text() {
  return (
    <div style={{ width: '60%', margin: '10% auto' }}>
      <ReactEditorJS tools={EDITOR_JS_TOOLS} />
    </div>
  );
}

export default Text;
