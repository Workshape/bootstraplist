import socketClient from 'socket.io-client';

export function setupRealtime(store, actions) {
  const io = socketClient();

  io.on('subscription-change', (change) => {
    let state = store.getState();
    if (!change.old_val) {
      store.dispatch(actions.incrementSubscriptionCount());
    }
  });

  return io;
}