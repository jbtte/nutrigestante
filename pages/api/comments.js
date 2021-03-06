import Comment from '../../models/comments'
import dbConnect from '../../middleware/mongodb'

export default async function handler (req, res) {
  const { method } = req
  
  await dbConnect()

  switch (method) {
    case 'GET':
      try{
        const comments = await Comment.find({})
        return res.status(200).send(comments)
      }
      catch(e) {res.status(400).json(e.message)}
      break
    
      case 'POST':
      try{
        const comment = new Comment({
          name: req.query.name,
          message: req.query.message
        })
        await comment.save()
        res.status(201).send(comment)
      } catch (e) {
        return res.status(400).send(e.message)
      }
      break

      case 'PATCH':
        try{
          const comment = await Comment.findById(req.query.id)
          console.log(comment)
          comment.approved = !comment.approved
          await comment.save()
          return res.status(201).send({sucess:"sucess", approved:comment.approved})
        }catch(e){
          return res.status(400).send(e.message)
        }
        break
  }
}
