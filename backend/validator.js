export const parseJson = json => {
  try {
    return JSON.parse(json)
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error(/* 'SintaxError:', */ error)
    } else {
      throw error
    }
  }
}
