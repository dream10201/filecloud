const name = window.FileCloud.Name || 'File Cloud'
const disableExternal = window.FileCloud.DisableExternal
const baseURL = window.FileCloud.BaseURL
const staticURL = window.FileCloud.StaticURL
const recaptcha = window.FileCloud.ReCaptcha
const recaptchaKey = window.FileCloud.ReCaptchaKey
const signup = window.FileCloud.Signup
const version = window.FileCloud.Version
const logoURL = `${staticURL}/img/logo.svg`
const noAuth = window.FileCloud.NoAuth
const authMethod = window.FileCloud.AuthMethod
const loginPage = window.FileCloud.LoginPage
const theme = window.FileCloud.Theme
const enableThumbs = window.FileCloud.EnableThumbs
const resizePreview = window.FileCloud.ResizePreview

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
  theme,
  enableThumbs,
  resizePreview
}
