const dbConnect = require('../../middleware/mongodb')
const Comment = require('../../models/comments')

export default async function handler (req, res) {
  const { method } = req

  return res.status(200).json({sucess:" Ok"})

}