export function connect({
  socket,
  servername,
}: {
  socket: { startTls: (servername: string) => void };
  servername: string;
}) {
  socket.startTls(servername);
  return socket;
}
