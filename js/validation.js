const TITLE_MIN_LENGTH = 3
const TITLE_MAX_LENGTH = 20
const ERROR_TITLE_LENGTH = `Название должно быть от ${TITLE_MIN_LENGTH} до ${TITLE_MAX_LENGTH} символов`

function isValidStringLength(str, min, max) {
  return str.length >= min && str.length <= max
}

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

function getValidTitle(title) {
  const trimmed = title.trim()
  if (!isValidStringLength(trimmed, TITLE_MIN_LENGTH, TITLE_MAX_LENGTH))
    return null

  return capitalize(trimmed)
}

export { ERROR_TITLE_LENGTH, getValidTitle, isValidStringLength, capitalize }
