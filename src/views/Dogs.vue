<template>
  <div>
    <h1>The Dogs</h1>
    <b-table striped hover :items="dogs" :fields="fields"></b-table>
  </div>
</template>

<script>
import dogs from '@/data/dogs'
export default {
  data () {
    return {
      dogs
    }
  }
}
</script>
