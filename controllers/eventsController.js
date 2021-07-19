const db = require("../models");

const bookingController = require("./bookingController");

const checkBookings = async (req) => {
  console.log('req ', req)
    try {
        const res = await bookingController.findOneByEmail(req)

        if (res) {
            db.Calendly
            .findOneAndUpdate({travelerEmail: req}, {paid: true})
            .then(console.log('marked as paid'))
            .catch(err => res.status(422).json(err))
        } else {
            db.Calendly
            .findOneAndUpdate({travelerEmail: req}, {paid: false})
            .then(console.log('marked as unpaid'))
            .catch(err => res.status(422).json(err))
        }
    } catch (error) {
        console.log(error)
    }
    return 
}

module.exports = {
    create: function(req, res) {
        db.Calendly
          .create({
              travelerName: req.body.payload.invitee.name, 
              travelerEmail: req.body.payload.invitee.email,
              isReschedule: req.body.payload.invitee.is_reschedule,
              calendlyID: req.body.payload.event.uuid,
              event_type: req.body.payload.event_type.name,
              location: req.body.payload.event.location,
              operator: req.body.payload.event.assigned_to,
              start_time_pretty: req.body.payload.event.start_time_pretty,
              unpaid: null
            })
          .then(dbModel => res.json(dbModel)) 
          .then(setTimeout(checkBookings, 1800000, req.body.payload.invitee.email))
          .catch(err => res.status(422).json(err));
      }

}
