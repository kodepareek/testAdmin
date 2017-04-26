import React from 'react';

import { Datagrid, TextField, List, EmailField, DateField } from 'admin-on-rest/lib/mui';

const UserList = (props) => {
  return (
    <List {...props} title="Writers">
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <DateField source="lastPublished" />
        <EmailField source="email" />
      </Datagrid>
    </List>
  )
}

module.exports = UserList