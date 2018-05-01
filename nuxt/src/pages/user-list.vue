<template>
  <div class="flex flex-center" style="margin-top: 5vw">
    <q-table
      :data="tableData"
      :columns="columns"
      selection="multiple"
      :selected.sync="selectedUsers"
      row-key="name"
      color="secondary"
      title="Felhasználók"
    >
      <template slot="top-selection" slot-scope="props">
        <q-btn @click="deleteSelectedUsers()" icon="delete" color="negative" label="Kijelölt felhasználók törlése" class="q-mr-sm" />
      </template>
    </q-table>
  </div>
</template>

<script>
import AXIOS from 'axios'
import { Notify } from 'quasar'

export default {
  name: 'user-list',
  data: () => ({
    selectedUsers: [],
    columns: [
      {
        name: 'ID',
        required: true,
        label: 'Id',
        align: 'left',
        field: 'name',
        sortable: true
      },
      {
        name: 'userName',
        required: true,
        label: 'Felhasználó név',
        align: 'left',
        field: 'userName',
        sortable: true
      },
      {
        name: 'userEmail',
        required: true,
        label: 'Email cím',
        align: 'left',
        field: 'userEmail',
        sortable: true
      }
    ],
    tableData: []
  }),
  created () {
    AXIOS.get('/api/user/')
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          let user = {}
          user['name'] = response.data[i].id
          user['userName'] = response.data[i].userName
          user['userEmail'] = response.data[i].userEmail
          this.$data.tableData.push(user)
        }
      })
  },
  methods: {
    deleteSelectedUsers () {
      for (let i = 0; i < this.$data.selectedUsers.length; i++) {
        AXIOS.post('/api/user/' + this.$data.selectedUsers[i].name + '/deleteUser')
          .then(() => {
            Notify.create({
              type: 'positive',
              color: 'positive',
              position: 'bottom',
              timeout: 3000,
              message: 'Sikeresen törölted a következő felhasználót: ' + this.$data.selectedUsers[i].userName
            })
          })
          .catch(() => {
            Notify.create({
              type: 'info',
              color: 'info',
              position: 'bottom',
              timeout: 3000,
              message: 'A következő felhasználó törlése sikertelen volt: ' + this.$data.selectedUsers[i].userName
            })
          })
      }
    }
  }
}
</script>
