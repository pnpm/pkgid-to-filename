import normalize = require('normalize-path')
import path = require('path')

export default function pkgIdToFilename (pkgId: string, prefix: string) {
  if (pkgId.indexOf('file:') !== 0) return pkgId

  const absolutePath = path.join(prefix, pkgId.slice(5))
  return `local/${encodeURIComponent(normalize(absolutePath))}`
}
