import normalize = require('normalize-path')
import path = require('path')

export default function pkgIdToFilename (pkgId: string, prefix: string) {
  if (pkgId.indexOf('file:') !== 0) return pkgId

  const absolutePath = normalize(path.join(prefix, pkgId.slice(5)))
  const lastSlash = absolutePath.lastIndexOf('/')
  return `local/${encodeURIComponent(absolutePath.substr(0, lastSlash + 1))}${absolutePath.substr(lastSlash + 1)}`
}
