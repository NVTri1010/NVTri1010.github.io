const execa = require('execa')

;(async () => {
  try {
    console.log('Building...')
    await execa('npm', ['run', 'export'])
    const builtFolder = 'out'
    await execa('git', ['add', builtFolder])
    await execa('git', ['commit', '-m', 'deploy gh-pages'])
    console.log('Pushing to gh-pages...')
    await execa('git', [
      'subtree',
      'push',
      '--prefix',
      builtFolder,
      'origin',
      'gh-pages'
    ])
    await execa('rm', ['-r', builtFolder])
    console.log('Successfully deployed')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
})()
