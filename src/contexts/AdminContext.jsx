import React from 'react';

const AdminContext = React.createContext({
  isChecked: false,
  handleToggle: () => {}
});

export default AdminContext;