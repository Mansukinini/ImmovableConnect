import express from 'express';
import { check, validationResult } from 'express-validator';
import { auth } from '../../middleware/auth.js';
import Profile from '../../models/Profile.js';
import User from '../../models/User.js';

const router = express.Router();

// @route   GET api/profile/me
// @desc    Get profile data
// @access  Public
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', [ 'name', 'avatar' ]);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   Post api/profile
// @desc   Create or update user profile
// @access  Public
router.post('/', [ auth, [ check('status', 'Status is required').not().isEmpty(), check('skill', 'skill is required') ] ]
  , async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { location, bio, status, skills } = req.body;

    // Build profile object
    const profileFfields = {};
    profileFfields.user = req.user.id;
    if (location) profileFfields.location = location;
    if (bio) profileFfields.bio = bio;
    if (status) profileFfields.status = status;
    if (skills) profileFfields.skills = skills.split(',').map(skill => skill.trim());

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFfields }, { new: true});
        return res.json(profile);
      }

      // Create
      profile = new Profile(profileFfields);

      await profile.save();
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

    res.send('Hello');
});


// @route   GET api/profile
// @desc    Get all profiles
// @access  Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('User', [ 'name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/profile
// @desc    Get all profiles
// @access  Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('User', [ 'name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;