import { sign } from "jsonwebtoken"
import config from "../config/default"
import { AES } from "crypto-js"

const createToken = (_id,role) => {
  const payload = { _id, role }
  const token = sign(payload, config.JWTKey, { expiresIn: 9999 })
  const cypherToken = AES.encrypt(token, config.CRYPTOKey).toString()  
  return cypherToken
}
export default createToken