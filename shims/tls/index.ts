export function connect({ socket, servername }: { socket: any, servername: string }) {
  socket.startTls(servername);
  return socket;
}
