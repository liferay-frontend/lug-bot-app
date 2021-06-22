import {Server} from 'socket.io';

export default function (req, res) {
	if (!res.socket.server.io) {
		// eslint-disable-next-line no-console
		console.log('Starting socket.io');

		const io = new Server(res.socket.server);

		io.on('connection', (socket) => {
			socket.broadcast.emit('new-user');
		});

		res.socket.server.io = io;
	}

	res.end();
}

export const config = {
	api: {
		bodyParser: false,
	},
};
