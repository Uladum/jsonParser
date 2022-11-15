export const validateJsonFrontend = json => {
  try {
    if (JSON.parse(json)) return true
  } catch (err) {
    if (err instanceof SyntaxError) {
      return false
    } else {
      throw err
    }
  }
}
