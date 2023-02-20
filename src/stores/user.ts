import { acceptHMRUpdate, defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export interface UserInfo {
  name: string
  org_type: string
  role_name: string
  union_name: string
  is_platform: string
}

export interface Token {
  access_token: string
  refresh_token: string
  expire: number
}

export const useUserStore = defineStore('user', () => {
  /**
   * Current name of the user.
   */
  const token = reactive<Token>({
    access_token: '',
    refresh_token: '',
    expire: 0,
  })
  /**
   * 设置 token
   */
  function setToken(tokenObj: Token) {
    token.access_token = tokenObj.access_token
    token.refresh_token = tokenObj.refresh_token
    token.expire = tokenObj.expire
  }

  const userinfo = ref<UserInfo | undefined>()
  /**
   * 设置用户信息
   */
  function setUser(user?: UserInfo) {
    userinfo.value = user
  }

  return {
    token,
    setToken,
    clearAccess() {
      token.access_token = ''
    },

    userinfo,
    setUser,

  }
}, {
  persist: true,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
