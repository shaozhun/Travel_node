const Parameter = require('parameter')
const parameter = new Parameter()

exports.parameterValidate = (rule) => {
  return (req, res, next) => {
    const validateErrors = parameter.validate(rule, Object.assign({}, req.body))
    if (validateErrors) {
      return res.status(422).json({
        error: '参数验证失败,请检查后重试'
      })
    }

    next()
  }
}
