import pkgIdToFilename from '@pnpm/pkgid-to-filename'
import test = require('tape')

test('pkgIdToFilename()', t => {
  t.equal(pkgIdToFilename('registry.npmjs.org/foo/1.0.0', process.cwd()), 'registry.npmjs.org/foo@1.0.0')
  t.equal(pkgIdToFilename('registry.npmjs.org/@foo/bar/1.0.0', process.cwd()), 'registry.npmjs.org/@foo/bar@1.0.0')
  t.equal(pkgIdToFilename('github.com/something/foo/0000', process.cwd()), 'github.com/something/foo@0000')

  const filename = pkgIdToFilename('file:./test/foo-1.0.0.tgz_foo@2.0.0', process.cwd())
  t.ok(filename.endsWith('%2Ffoo-1.0.0.tgz_foo@2.0.0'))
  t.end()
})
