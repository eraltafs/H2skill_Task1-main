const express = require("express")
const teamRouter = express.Router()

const {Collection1Modal} = require("../models/collection1")

teamRouter.get("/", async (req,res)=>{
    try {
        const data = await Collection1Modal.aggregate([
          {
            $lookup: {
                from: 'collection2',
                localField: 'email',
                foreignField: 'email',
                as: 'team',
              },
            },
            {
              $project: {
                _id: 0,
                'team.team_name': 1,
                full_name: 1,
                email: 1,
                number: 1,
                city: 1,
                url: 1,
            },
          },
        ]);
    
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      }
})

module.exports = { teamRouter }