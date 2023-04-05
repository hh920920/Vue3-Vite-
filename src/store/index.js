import { createStore } from 'vuex'
import Cookie from 'js-cookie'
export default createStore({
    state: {
        isCollapse: true,
        currentMenu: null,
        tabsList: [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 'home'
        }],
        menu: [],
        token: ''
    },
    mutations: {
        updateIsCollapse(state, payload) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            // val.name == 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
            if (val.name == 'home') {
                state.currentMenu = null
            } else {
                state.currentMenu = val
                let result = state.tabsList.findIndex(item => item.name === val.name)
                result == -1 ? state.tabsList.push(val) : ''
            }
        },
        closeTab(state, val) {
            console.log(val);
            let res = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(res, 1)

        },
        setMenu(state, val) {
            state.menu = val
            localStorage.setItem('menu', JSON.stringify(val))
        },
        addMenu(state, router) {
            if (!localStorage.getItem('menu')) {
                return
            }
            // let menu = JSON.parse(localStorage.getItem('menu'))
            let menu = JSON.parse(localStorage.getItem('menu'))
            const menuArray = []
            menu.forEach(item => {
              if (item.children) {
                item.children = item.children.map(item => {
                  let url = `../views/${item.url}.vue`
                  item.component = () => import(/* @vite-ignore */ url)
                  return item
                })
                menuArray.push(...item.children)
              } else {
                let url = `../views/${item.url}.vue`
                item.component = () => import(/* @vite-ignore */ url)
                menuArray.push(item)
              }
            })
            menuArray.forEach(item => {
              router.addRoute('home1', item)
            })
        },
        cleanMenu(state) {
            state.menu = []
            localStorage.removeItem('menu')
        },
        setToken(state, val) {
            state.token = val
            localStorage.setItem('token', val)
        },
        clearToken(state) {
            state.token = ''
            localStorage.clear()
        },
        getToken(state) {
            state.token = state.token || localStorage.getItem('token')
        }

    }
})