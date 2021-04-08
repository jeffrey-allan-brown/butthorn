const validator = require('validator');

const quoteLookup = {

};

function generateQuote(payload, callback) {

	// validation for payload //
	if() {
		throw new Error('Error: Invalid Payload Format. Please confirm proper data type formatting.')
		return;
	}

	// instantiate variables //
	let formattedResult = '';
	let typeface = '';

	// set default value for typeface if empty //
	if(validator.isEmpty(payload.typeface)) {
		typeface = 'doom';
	} else {
		typeface = payload.typeface;
	}

	// set variables for height and width of characters for the given typeface //
	const height = characterLookup[typeface].meta.height,
	width = characterLookup[typeface].meta.width;

	for (var i = 0; i < payload.input.length; i++) {
		let character = payload.input[i],
		charLookup = characterLookup[typeface].alphanumeric[character]

		for (var i = charLookup.length; i > 0; i--) {
			formattedResult	= formattedResult	+ characterLookup[typeface].alphanumeric.character
		}

	}
		console.log(formattedResult	)
	return callback(formattedResult);

};

module.exports.textart = textart;