import React from 'react';
import Table, { DataRequest, Column } from './Table';

type ColumnsType = Column[]

const App: React.FC = () => {

  const data: DataRequest = {
    data: [
      {
        name: 'Lauro Damasceno',
        email: 'laurodamasceno@gmail.com'
      },
      {
        name: 'Orual Onecsamad',
        email: 'orualonecsamad@gmail.com'
      }
    ],
    total: 1,
    totalPerPage: 10
  }

  const columns: ColumnsType = [
    { name: 'Nome', data: 'name' },
    { name: 'Email', data: 'email' },
  ]

  return (
    <div className="App">
      <h1>DJ - DataTable</h1>
      <hr />
      <Table data={data} columns={columns} />
    </div>
  )
}

export default App;
