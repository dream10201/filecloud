const name = window.FileCloud.Name || 'File Cloud'
const disableExternal = window.FileCloud.DisableExternal
const baseURL = window.FileCloud.BaseURL
const staticURL = window.FileCloud.StaticURL
const recaptcha = window.FileCloud.ReCaptcha
const recaptchaKey = window.FileCloud.ReCaptchaKey
const signup = window.FileCloud.Signup
const version = window.FileCloud.Version
const logoURL = `${staticURL}/img/logo.svg`
const noAuth = window.FileBrowser.NoAuth
const authMethod = window.FileBrowser.AuthMethod
const loginPage = window.FileBrowser.LoginPage
const theme = window.FileBrowser.Theme
const enableThumbs = window.FileBrowser.EnableThumbs

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
  enableThumbs
}
