import { useState } from "react"

export default function Create ({setCreateData, number, setNumber, msg}) {

    const[name,setName] = useState('');
    const[lastName, setLastName] = useState('');

    const save = () => {
        if (name.trim() === '' || lastName.trim() === '') {
          return msg('iveskite varda ir pavarde');
        } else if (!/^[a-zA-Z]+$/.test(name) || !/^[a-zA-Z]+$/.test(lastName)) {
          return msg('galimos tik raidės');
        } else {
          setCreateData({ name: name, lastName: lastName, balance: 0 });
          setName('');
          setLastName('');
        }
      };
      
      

    return (
         <div className="card">
            <h5 className="card-header color-yellow">Sukurti naują saskaitą</h5>
            <div className="card-body">
                <div className="m-3">
                    <input  className="form-control" value={name} onChange={e => setName(e.target.value)} placeholder="Vardas" title="Choose your color" />
                    <input  className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Pavardė" title="Choose your color" />
                    <button onClick={save} className="button-top">Išsaugoti</button>
                </div>
            </div>
        </div>
        
    )
}