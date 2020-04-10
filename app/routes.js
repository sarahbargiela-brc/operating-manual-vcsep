const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching in /refer/able-to-leave
router.post('/refer/family-friends', function (req, res) {

  let able_to_leave = req.session.data['able_to_leave']

  if (able_to_leave === 'yes') {
    res.redirect('/refer/result/yes-able-to-leave')
  } else {
    res.redirect('/refer/family-friends')
  }
})

// Branching in /refer/family-friends
router.post('/refer/local-organisations', function (req, res) {

  let family_friends = req.session.data['family_friends']

  if (family_friends === 'yes') {
    res.redirect('/refer/result/yes-family-friends')
  } else {
    res.redirect('/refer/local-organisations')
  }
})

// Branching in /refer/family-friends
router.post('/refer/urgent', function (req, res) {

  let local_organisations = req.session.data['local_organisations']

  if (local_organisations === 'yes') {
    res.redirect('/refer/result/yes-local-organisations')
  } else {
    res.redirect('/refer/urgent')
  }
})

// Branching in /urgent
router.post('/refer/result/yes-urgent', function (req, res) {

  let urgent = req.session.data['urgent']

  if (urgent === 'no') {
    res.redirect('/refer/result/not-urgent')
  } else {
    res.redirect('/refer/result/yes-urgent')
  }
})

module.exports = router
