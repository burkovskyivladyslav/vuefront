import AddressesGql from 'vuefront/graphql/account/address/list.graphql'
import AddressGql from 'vuefront/graphql/account/address/get.graphql'
import AddressAddGql from 'vuefront/graphql/account/address/create.graphql'
import AddressEditGql from 'vuefront/graphql/account/address/edit.graphql'
import AddressRemoveGql from 'vuefront/graphql/account/address/remove.graphql'

export const state = () => ({
  address: false,
  entities: []
})

export const getters = {
  get(state) {
    return state.address
  },
  list(state) {
    return state.entities
  }
}

export const mutations = {
  setAddress(state, payload) {
    state.address = payload
  },
  setEntities(state, payload) {
    state.entities = payload
  }
}

export const actions = {
  async get({ commit, dispatch, rootGetters }, { id }) {
    await dispatch(
      'apollo/query',
      {
        query: AddressGql,
        variables: { id }
      },
      {
        root: true
      }
    )
    if (!rootGetters['vuefront/error']) {
      commit('setAddress', rootGetters['apollo/get'].accountAddress)
    }
  },
  async create({ commit, dispatch, rootGetters }, { address }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: AddressAddGql,
        variables: {
          address
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setAddress', rootGetters['apollo/get'].accountAddAddress)

      return true
    }

    return false
  },
  async edit({ commit, dispatch, rootGetters }, { id, address }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: AddressEditGql,
        variables: {
          id,
          address
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setAddress', rootGetters['apollo/get'].accountEditAddress)

      return true
    }

    return false
  },
  async remove({ commit, dispatch, rootGetters }, { id }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: AddressRemoveGql,
        variables: {
          id
        }
      },
      {
        root: true
      }
    )

    if (!rootGetters['vuefront/error']) {
      commit('setEntities', rootGetters['apollo/get'].accountRemoveAddress)
    }
  }
}
