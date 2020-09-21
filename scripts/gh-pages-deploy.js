const execa = require('execa')

;(async () => {
  try {
    await execa('git', ['checkout', '--orphan', 'gh-pages'])
    console.log('Building...')
    await execa('npm', ['run', 'export'])
    const builtFolder = 'out'
    await execa('git', ['--work-tree', builtFolder, 'add', '--all'])
    await execa('git', ['--work-tree', builtFolder, 'commit', '-m', 'gh-pages'])
    console.log('Pushing to gh-pages...')
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force'])
    await execa('rm', ['-r', builtFolder])
    await execa('git', ['checkout', '-f', 'dev'])
    await execa('git', ['branch', '-D', 'gh-pages'])
    console.log('Successfully deployed')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
})()
