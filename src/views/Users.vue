<template>
  <div>
       <md-progress-bar md-mode="determinate" :md-value="page.current * 10 * (page.length)"></md-progress-bar>
   <md-table>
      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <th class="table-head" @click="sort('name')">Name {{currentSortDir === "asc" && currentSort === "name" ? "&#x2193;" : "&#x2191;"}} </th>
        <th class="table-head" @click="sort('email')">Email {{currentSortDir === "asc" && currentSort === "email"  ? "&#x2193;" : "&#x2191;"}}</th>
        <th class="table-head" @click="sort('phone')">phone {{currentSortDir === "asc" && currentSort === "phone"  ? "&#x2193;" : "&#x2191;"}}</th>
      </md-table-row>
      <md-table-row v-for="user in usersSort" :key="user.id">
        <md-table-head md-numeric>{{ user.id }}</md-table-head>
        <md-table-head >{{ user.name }}</md-table-head>
        <md-table-head>{{ user.email }}</md-table-head>
        <md-table-head>{{ user.phone }}</md-table-head>
      </md-table-row>
    </md-table>

    <div>
       <md-button @click="prevPage" class="md-dense md-raised md-primary ">&#x2190;</md-button>
       <md-button @click="nextPage" class="md-dense  md-raised md-primary">&#x2192;</md-button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data: () => ({
    users: [],
    currentSort: "name",
    currentSortDir: "asc",
    page: {
      current: 1,
      length: 3
    }
  }),
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => console.error(error));
  },
  computed: {
    usersSort() {
      return this.users && this.users.sort((a, b) => {
        let mod = 1;
        if(this.currentSortDir === 'desc') mod = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * mod
        if(a[this.currentSort] > b[this.currentSort]) return 1 * mod
        return 0
      }).filter((row, index) => {
         let start = (this.page.current -1)*this.page.length
         let end = this.page.current * this.page.length
         if(index >= start && index < end ) return true
      })
    }
  },
 methods : {
    sort(e) {
      if(e === this.currentSort){
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = e
    },
    // Pagination
    prevPage() {
     if(this.page.current > 1) this.page.current-=1
    },
    nextPage() {
      if((this.page.current * this.page.length < this.users.length)) this.page.current+=1
    }
  }
};
</script>


<style>
  .table-head{
    cursor: pointer;
    text-align: left;
    padding-left: 20px;
  }
</style>