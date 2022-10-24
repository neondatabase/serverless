export function connect(options: { socket: any, servername: string }) {
  const { socket, servername } = options;
  socket.startTls(servername);
  return socket;
}
