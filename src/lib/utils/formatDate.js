export function formatDate(date) {
	return new Date(date).toLocaleDateString('en-NZ', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
}
