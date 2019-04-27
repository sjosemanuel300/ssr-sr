export const oneOf = (types = [], type) => {
	for (let t of types) {
		if (type === t) {
			return true
		}
	}
	return false
}