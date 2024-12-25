import { paths } from 'src/routes/paths'

import packageJson from '../package.json'

// ----------------------------------------------------------------------

export type ConfigValue = {
  appName: string
  appVersion: string
  serverUrl: string
  assetsDir: string
  auth: {
    method: 'jwt'
    skip: boolean
    redirectPath: string
  }
  mapboxApiKey: string
}

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  appName: 'UzChess MiniApp',
  appVersion: packageJson.version,
  serverUrl: `${import.meta.env.VITE_SERVER_URL}/api`,
  assetsDir: import.meta.env.VITE_ASSETS_DIR ?? '',
  /**
   * Auth
   * @method jwt | amplify | firebase | supabase | auth0
   */
  auth: {
    method: 'jwt',
    skip: false,
    redirectPath: paths.dashboard.root,
  },
  /**
   * Mapbox
   */
  mapboxApiKey: import.meta.env.VITE_MAPBOX_API_KEY ?? '',
}
