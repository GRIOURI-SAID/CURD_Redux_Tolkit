import {  Routes, Route } from 'react-router-dom';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';
import ListUser from './features/users/ListUser';

function App() {
  return (
    <div className="container mx-w-5xl mx-auto mt-5 px-2 md:mt-32">
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/add_user" element={<AddUser />} />
        <Route path="/edit_user/:id" element={<EditUser />} />
      
      </Routes>
    </div>
  );
}

export default App;
