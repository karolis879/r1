import { useState } from "react";

export default function Create({
  setCreateData,
  msg,
  createModalData,
  setCreateModalData,
}) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const save = () => {
    if (name.trim() === "" || lastName.trim() === "") {
      return msg("iveskite varda ir pavarde");
    } else if (!/^[a-zA-Z]+$/.test(name) || !/^[a-zA-Z]+$/.test(lastName)) {
      return msg("galimos tik raidės");
    } else {
      setCreateData({ name: name, lastName: lastName, balance: 0 });
      setName("");
      setLastName("");
      setCreateModalData(null);
    }
  };

    if (null === createModalData) {
    return null;
}



  return (
    <div style={{display: 'block', backgroundColor: "#282c3495"}} className="modal" tabindex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button 
          type="button" 
          className="btn-close btn" 
          onClick={(_) => setCreateModalData(null)}
          ></button>
        </div>
        <div className="modal-body">
        <input  className="form-control" value={name} onChange={e => setName(e.target.value)} placeholder="Vardas" title="Choose your color" />
            <input  className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Pavardė" title="Choose your color" />
        </div>
        <div className="modal-footer">
          <button onClick={save} className="btn-secondary" data-bs-dismiss="modal">Išsaugoti</button>
        </div>
      </div>
    </div>
  </div>
  );
}
