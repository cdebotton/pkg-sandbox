'use strict';

import React from 'react';
import flux from '../flux';

var Snapshot = React.createClass({
  highlightSyntax(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
  },

  render(){
    flux.takeSnapshot();
    var snapshot = this.highlightSyntax(
      JSON.stringify(
        JSON.parse(flux._lastSnapshot), undefined, 2
      )
    );

    return (
      <div className="snapshot">
        <h2>Snapshot JSON</h2>
        <pre dangerouslySetInnerHTML={{__html: snapshot}} />
      </div>
    );
  }
});

export default Snapshot;
