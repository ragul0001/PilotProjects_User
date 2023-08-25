const {user}=require('../modals/signin');

const userController={
    getAllUsers: async (req, res) => {
        try {
          const users = await user.findAll();
          res.json(users);
        } catch (err) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      },
};
module.exports=userController;