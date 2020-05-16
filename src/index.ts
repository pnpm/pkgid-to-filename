import normalize = require('normalize-path')
import path = require('path')

export default function pkgIdToFilename (pkgId: string, prefix: string) {
  if (pkgId.indexOf('file:') !== 0) {
    const index = pkgId.lastIndexOf('/')
    return `${pkgId.substr(0, index)}@${pkgId.substr(index + 1)}`
  }

  const absolutePath = normalize(path.join(prefix, pkgId.slice(5)))
  const lastSlash = absolutePath.lastIndexOf('/')
  return `local/${encodeURIComponent(absolutePath.substr(0, lastSlash + 1))}${absolutePath.substr(lastSlash + 1)}`
}
