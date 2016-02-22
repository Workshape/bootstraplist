import r from 'rethinkdb';
import config from 'config';
import xss from 'xss';

function connect() {
  return r.connect(config.get('rethinkdb'));
}

export function liveUpdates(io) {
  console.log('Setting up listener...');
  connect()
  .then(conn => {
    r
    .table('emails')
    .changes().run(conn, (err, cursor) => {
      console.log('Listening for changes...');
      cursor.each((err, change) => {
        console.log('Change detected', change);
        io.emit('subscription-change', change);
      });
    });
  });
}

export function getSubscriptions() {
  return connect()
  .then(conn => {
    return r
    .table('emails')
    .orderBy(r.desc('created')).run(conn)
    .then(cursor => cursor.toArray());
  });
}

export function addSubscription(subscription) {
  return connect()
  .then(conn => {
    subscription.created = new Date();
    subscription.name = xss(subscription.name);
    subscription.email = xss(subscription.email);
    return r
    .table('emails')
    .insert(subscription).run(conn)
    .then(response => {
      return Object.assign({}, subscription, {id: response.generated_keys[0]});
    });
  });
}