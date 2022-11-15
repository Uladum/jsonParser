export function obtainKeys(json) {
  try {
    let newJson = json
    for (const key in json) {
      if (typeof json[key] !== 'object') {
        newJson[key] = typeof json[key]
      } else {
        obtainKeys(json[key])
      }
    }
    return newJson
  } catch (err) {
    if (err instanceof SyntaxError) {
      console.error('SintaxError:', err)
    } else {
      throw err
    }
  }
}
