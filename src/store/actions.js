// https://vuex.vuejs.org/en/actions.html

import axios from '../plugins/axios'

export default {
  SET_ROW_DATA : async (context, file) => {
    let { data } = await axios.post('/api/excel', file)
    if(data.status === 200){
      context.dispatch('SET_ROW_DATA', name)
    }
  }
}
