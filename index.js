;((publish) => {
	const type = (check) => {
		const result = ({}).toString.call(check).toLowerCase().split(' ').pop()
		return result.substring(0, result.length - 1)
	}
	publish(type)
})((typeof module == 'undefined' || (typeof window !== 'undefined' && this == window)) ? function(a) { this['retrieveType'] = a } : function(a) { module.exports = a })