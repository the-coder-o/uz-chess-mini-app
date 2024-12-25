import { jwtDecode } from 'jwt-decode'

export const useAdminRole = () => {
  const token = localStorage.getItem('access_token') ?? ''
  const decodedToken = token ? jwtDecode<{ role: string; user: string }>(token ?? '') : null
  const adminRole = decodedToken?.role
  const user = {
    role: adminRole,
  }
  return { user, decodedToken }
}
