<template>
  <div class="home">
  <h1>Adopt your mates</h1>
  <button @click="togglePetForm" class="btn btn-primary">Add new animal</button>
  <b-form @submit="handleSubmit"  v-if="showPetForm">

      <b-form-group id="input-group-2" label="Animal Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

          <b-form-group id="input-group-2" label="Animal Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.age"
          type="number"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: true,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  method: {
    togglePetForm () {
      this.petForm = !this.petForm
    },
    handleSubmit () {

    }
  }
}
</script>
