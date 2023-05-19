import { useState, useEffect } from "react";

export default function Edit({editModalData, setEditModalData, setEditData, ammount, setAmmount, msg}) {


  const save = () => {
    const difference = parseInt(ammount) + parseInt(editModalData.balance);
    if (isNaN(difference) || !/^\d+$/.test(ammount)) {
      msg('turi buti skaicius');
    } else {
      setEditData({ balance: difference, id: editModalData.id });
      setAmmount(0);
      setEditModalData(null);
    }
  };
  
  const min = () => {
    const difference = parseInt(editModalData.balance) - parseInt(ammount);
    if (isNaN(difference) || !/^\d+$/.test(ammount)) {
      msg('negalima raidizu');
    } else if (difference < 0) {
      msg('negalimas neigiamas')
    }
     else {
      setEditData({ balance: difference, id: editModalData.id });
      setAmmount(0);
      setEditModalData(null);
    }
  };
    


    const handleInputChange = (event) => {
      const inputValue = event.target.value;
        setAmmount(inputValue);
      }
    
    
    if (null === editModalData) {
        return null;
    }
  
    return (
    <div
      style={{ display: "block", backgroundColor: "#282c3430" }}
      className="modal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Edit sum
            </h5>
            <button
              type="button"
              className="btn-close btn"
              onClick={_ => setEditModalData(null)}
            ></button>
          </div>
          <div className="modal-body">
          <input  
          className="form-control" 
          placeholder="Iveskite sumą" 
          title="Choose your color" 
          onChange={handleInputChange}
          />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="list-button"
              onClick={save}
            >
              Pridėti lėšų
            </button>
            <button 
            type="button" 
            className="list-button red"
            onClick={min}
            >
              Nuskaičiuoti lėšas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

