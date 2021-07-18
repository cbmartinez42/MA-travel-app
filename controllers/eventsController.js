const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Calendly
          .create({
              travelerName: req.body.payload.event.invitee.name, 
              travelerEmail: req.body.payload.event.invitee.email,
              isReschedule: req.body.payload.event.invitee.is_reschedule,
              calendlyID: req.body.payload.event.uuid,
              event_type: req.body.payload.event_type.name,
              location: req.body.payload.event.location,
              operator: req.body.payload.event.assigned_to,
              start_time_pretty: req.body.payload.event.start_time_pretty
            })
          .then(dbModel => console.log(dbModel))
          .catch(err => res.status(422).json(err));
      },
}