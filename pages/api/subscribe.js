
export default (req, res) => {
  const { email } = req.body

  if(!email){
    res.statusCode = 400
  }

  res.statusCode = 200
  res.json({ email })
}
