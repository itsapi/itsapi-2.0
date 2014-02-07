function wrap(text, tag, attrs) {
	attrs = (attrs == undefined) ? '' : ' '+attrs;
	return '<'+tag+attrs+'>'+text+'</'+tag+'>';
}

exports.wrap = wrap;
