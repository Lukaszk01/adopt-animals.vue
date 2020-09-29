<template>
  <div>
    <h1>The Dogs</h1>
    <b-table striped hover :items="dogs" :fields="fields"></b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
