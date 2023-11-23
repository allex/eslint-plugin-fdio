const eslint = require('eslint')

const { ESLint } = require("eslint")

describe('eslint', () => {
  it('load config in eslint to validate all rule syntax is correct', async (t) => {
    const cli = new ESLint({
      cwd: __dirname,
      useEslintrc: true
    })

    const code = `
  var foo = 1
  var bar = function () {}
  bar(foo)
  `
    const results = cli.lintText(code)
    console.log(results)
    if (results.errorCount > 0) {
      console.error(`
  Lint Error:
    ${results.messages.map(o => o.message).join('\n')}
  `)
    }

    t.equal(results.errorCount, 0)
    t.end()
  })
})
