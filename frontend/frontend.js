import { modifyJson } from '../backend/backend.js'
import { validateJsonFrontend } from './validation.js'

const btnTransform = document.querySelector('#btn-transform')
const btnDelete = document.querySelector('#btn-delete')
const interfacesOutput = document.querySelector('#interfaces-output')
const infoTextarea = document.querySelector('textarea')

btnTransform.addEventListener('click', () => {
  const json = infoTextarea.value

  if (json) {
    !validateJsonFrontend(json)
      ? (interfacesOutput.innerHTML =
          '<p id="json-error">JSON inválido. Revíselo y vuelva a intentarlo.</p>')
      : jsonKeys(json)
  }
})

btnDelete.addEventListener('click', () => {
  infoTextarea.value = ''

  const jsonError = document.getElementById('json-error')
  if (jsonError) jsonError.remove()

  const json = document.getElementById('json')
  if (json) json.remove()
})

const jsonKeys = (json) => {
  interfacesOutput.innerHTML = `<p id="json">${JSON.stringify(
    modifyJson(json)
  )}</p>`
}
