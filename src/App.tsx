import './App.css'
import Alert from './components/Alert/Alert'
import { Bell } from 'lucide-react';

function App() {

  return (
    <div>
      <Alert type='alert-danger' icon={<Bell/>} title='Something went wrong' description="      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five"/>
      <Alert type='alert-default' icon={<Bell/>} title='Welcome back!' description="  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five"/>

    </div>
  )
}

export default App
