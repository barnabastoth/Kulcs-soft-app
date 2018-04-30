<template>
  <div>
    <q-table
      :data="tableData"
      :columns="columns"
      selection="multiple"
      :selected.sync="selectedUsers"
      row-key="name"
      color="secondary"
      title="Válaszd ki a törölni kivánt felhasználót(kat)"
    >
      <template slot="top-selection" slot-scope="props">
        <q-btn icon="delete" color="negative" label="Kijelölt felhasználók törlése" class="q-mr-sm" />
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  name: 'user-list'
}
</script>
