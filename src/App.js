
import { useRef, useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Card } from './components/Card';
import { Props } from './components/Props';

function App() {

  const [list,setList] = useState([])
  const [searchTerm,setSearchTerm] = useState('')
  const nameRef = useRef('')
  const numberRef = useRef('')
  const emailRef = useRef('')
  const handleChange = (e) => {
      setSearchTerm(e.target.value)
  }
  const onAdd = () => {
      const name = nameRef.current.value.trim()
      const number = numberRef.current.value.trim()
      const email = emailRef.current.value.trim()
      if (!name || !number || !email) {
        alert('all properties are required')
      }else {
        const newContact = {id: list.length+1, name: name, number: number, email: email}
        setList([...list,newContact])
      }
      

  }
  console.log(list)
  const onSubmit = (e) => {
      e.preventDefault()
      nameRef.current.value = ''
      numberRef.current.value = ''
      emailRef.current.value = ''
  }
  return (
    <div className='bg-violet-100 min-h-screen'>
        <div className='py-4 flex justify-center items-center text-5xl text-violet-950 bg-violet-100'>Contact List</div>
        <div className='flex justify-between my-4'>
          <form onSubmit={onSubmit}>
            <Input Ref={nameRef} Placeholder='Name'/>
            <Input Ref={numberRef} Placeholder='Number'/>
            <Input Ref={emailRef} Placeholder='Email'/>
            <button className='border-2 border-violet-950 p-2 rounded-md text-violet-950' onClick={onAdd}>Add</button>
          </form>
          <div>
            <Input handleChange={handleChange} Placeholder={'Search'}/>
          </div>

        </div>
        <div className='flex justify-evenly my-2 py-4 border-y-2 border-violet-950'>
          <Props text={'Name'}/>
          <Props text={'Number'}/>
          <Props text={'Email'}/>
        </div>
        <div>
          {
              list
                  .filter((contact) => {
                    if (contact.name.includes(searchTerm)) {
                      return contact
                    }
                  })
                  .map((contact) => {
                    return <Card name={contact.name} number={contact.number} email={contact.email}/>
                  })
          }
        </div>
    </div>
  );
}

export default App;
