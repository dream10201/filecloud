const name = window.filecloud.Name || 'File Cloud'
const disableExternal = window.filecloud.DisableExternal
const baseURL = window.filecloud.BaseURL
const staticURL = window.filecloud.StaticURL
const recaptcha = window.filecloud.ReCaptcha
const recaptchaKey = window.filecloud.ReCaptchaKey
const signup = window.filecloud.Signup
const version = window.filecloud.Version
const logoURL = `/${staticURL}/img/logo.svg`
const noAuth = window.filecloud.NoAuth
const authMethod = window.filecloud.AuthMethod
const loginPage = window.filecloud.LoginPage
const theme = window.filecloud.Theme

export {
  name,
  disableExternal,
  baseURL,
  logoURL,
  recaptcha,
  recaptchaKey,
  signup,
  version,
  noAuth,
  authMethod,
  loginPage,
  theme
}
