import { parseJson } from './validator.js'
import { obtainKeys } from './obtainKeys.js'

// {"user":{"name":"Jero","surname":"Gascón"},"age": 31}

export const modifyJson = json => {
  return obtainKeys(parseJson(json))
}
