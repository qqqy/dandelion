const bcrypt = require('bcryptjs')

module.exports = {
  async dbtest(req, res){
    const db = req.app.get('db')
    const reply = await db.dbtest().catch(error => res.status(200).send(error))
    res.status(200).send(reply[0])
  } ,
  bcryptTest(req, res) {
    const { testPass } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(testPass , salt)
    req.session.testHash = hash
    res.status(200).send(req.session.testHash)
  }
}