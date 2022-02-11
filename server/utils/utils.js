const returnResult = {
	// Whether call was a success
	success: true,
	// If success = false, what was the reason?
	reason: "",
	// Possible other data return when success was true
	data: null,
};

module.exports = {
	// Base return format for every api call
	returnResult,
};
