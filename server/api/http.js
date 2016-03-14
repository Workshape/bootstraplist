import * as subscriptionService from './service/subscription';
import * as companyService from './service/company';

export function addSubscription(req, res) {
  subscriptionService.addSubscription(req.body)
  .then((subscription) => res.json(subscription))
  .catch(err => {
    res.status(400);
    res.json({error: err, subscription: req.body});
  });
};

export function addCompany(req, res) {
  companyService.addCompany(req.body)
  .then((company) => res.json(company))
  .catch(err => {
    res.status(400);
    res.json({error: err, company: req.body});
  });
};