const type = (check) => {
	const result = ({}).toString.call(check).toLowerCase().split(' ').pop()
	return result.substring(0, result.length - 1)
}

module.exports = type