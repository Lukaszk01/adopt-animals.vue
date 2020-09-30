export default {
  appendPet: (state, { species, pet }) => {
    this.state[species].push(pet)
  }
}
