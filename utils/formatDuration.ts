export default function formatDuration(duration: number) {
	let seconds: string | number = Math.floor((duration / 1000) % 60);
	let minutes: string | number = Math.floor((duration / (1000 * 60)) % 60);
	const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

	minutes = minutes < 10 ? `${hours > 0 ? '0' : ''}${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;

	if (hours > 0) {
		return `${hours}h ${minutes}m`;
	}

	if (minutes !== '0') {
		return `${minutes}m`;
	}

	if (seconds) {
		return `${seconds}s`;
	}
}
