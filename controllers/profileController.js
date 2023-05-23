const User = require('../models/user');

// Update profile controller
const updateProfile = async (req, res) => {
  try {
    // const userId = req.userId; 
  
    const { username, age, dob, contact ,userId} = req.body;
    console.log(userId,"7576")
    const user = await User.findByIdAndUpdate(userId, {
      username,
      age,
      dob,
      contact,
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

module.exports = {
  updateProfile,
};
