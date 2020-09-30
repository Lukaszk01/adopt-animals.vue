<template>
  <div class="home">
  <h1>Adopt your mates</h1>
  <button @click="togglePetForm" class="btn btn-primary">Add new animal</button>

    <b-form @submit.prevent ="handleSubmit"  v-if="showPetForm">
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
  import { mapActions } from 'vuex'
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  method: {
    mapActions([
      'addPet'
      ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { spacies, age, name } = this.formData
      const payload = {
        species,
        pets: {
          name,
          age
        }

      }
      this.addPet(payload)

    }
  }
}
</script>
