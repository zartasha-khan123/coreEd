export type DemoUser = {
  email: string
  password: string
  role: "client" | "developer"
}

const USERS_KEY = "demo_users"
const AUTH_USER_KEY = "demo_auth_user"

export function getUsers(): DemoUser[] {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(USERS_KEY)
    return raw ? (JSON.parse(raw) as DemoUser[]) : []
  } catch {
    return []
  }
}

export function saveUser(user: DemoUser) {
  if (typeof window === "undefined") return
  const users = getUsers()
  const idx = users.findIndex((u) => u.email.toLowerCase() === user.email.toLowerCase())
  if (idx >= 0) {
    users[idx] = user
  } else {
    users.push(user)
  }
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function findUser(email: string): DemoUser | undefined {
  return getUsers().find((u) => u.email.toLowerCase() === email.toLowerCase())
}

export function setAuthUser(user: DemoUser) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user))
}

export function getAuthUser(): DemoUser | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(AUTH_USER_KEY)
    return raw ? (JSON.parse(raw) as DemoUser) : null
  } catch {
    return null
  }
}

export function clearAuthUser() {
  if (typeof window === "undefined") return
  window.localStorage.removeItem(AUTH_USER_KEY)
}
