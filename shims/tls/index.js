export function connect(options) {
  const { socket, servername } = options;
  socket.startTls(servername);
  return socket;
}
