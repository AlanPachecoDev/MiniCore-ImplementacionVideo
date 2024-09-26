<template>
    <div>
      <table class="table is-striped is-bordered mt-2 is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id_cli }}</td>
            <td>{{ item.nombre_cli }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
    
  <script>
  // import axios
  import axios from "axios";
    
  export default {
    name: "ClientList",
    data() {
      return {
        items: [],
      };
    },
    
    created() {
      this.getClients();
    },
    
    methods: {
      async getClients() {
        try {
          const response = await axios.get("http://localhost:3001/clients");
          this.items = response.data; 
          
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
  </script>
    
  <style>
  </style>
