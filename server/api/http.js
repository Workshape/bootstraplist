import * as subscriptionService from './service/subscription';

export function addSubscription(req, res) {
  subscriptionService.addSubscription(req.body)
  .then((event) => res.json(event))
  .catch(err => {
    res.status(400);
    res.json({error: err, event: req.body});
  });
}


