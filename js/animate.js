// (c) 2013 Oliver Moran <oliver@nth-iteration.ie>
// Licensed under the MIT license.
HTMLElement.prototype.animate=function(a,c,d){if("string"==typeof a){var b=this;a=" animated "+a;b.className+=a;setTimeout(function(){b.className=b.className.replace(a,"");"function"==typeof c&&c.call(d?d:window)},"hinge"==a?2E3:1E3)}};
