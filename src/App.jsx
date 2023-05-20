import logo from "./logo.png";
import "./App.scss";
import "./buttons.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import Create from "./components/crud/Create";
import List from "./components/crud/List";
import { useState, useEffect } from "react";
import {
  crudCreate,
  crudDelete,
  crudRead,
  crudEdit,
} from "./components/crud/functions/localStorageCrud";
import Delete from "./components/crud/Delete";
import Edit from "./components/crud/Edit";
import Messages from "./components/crud/Messages";

const KEY = "myFancyAccount";

export default function App() {
  const [listUpdate, setListUpdate] = useState(Date.now());
  const [name, setName] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editModalData, setEditModalData] = useState(null);
  const [createModalData, setCreateModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [ammount, setAmmount] = useState(0);
  const [messages, setMessages] = useState([]);
  

  //R read
  useEffect(
    (_) => {
      setName(crudRead(KEY));
    },
    [listUpdate]
  );

  //C create
  useEffect(
    (_) => {
      if (null === createData) {
        return;
      }
      crudCreate(KEY, createData);
      setListUpdate(Date.now());
      msg("Nauja saskaita", "ok");
    },
    [createData]
  );

  //U updates
  useEffect(
    (_) => {
      if (null === editData) {
        return;
      }
      crudEdit(KEY, editData, editData.id);
      setListUpdate(Date.now());
    },
    [editData]
  );

  // D delete

  useEffect(
    (_) => {
      if (null === deleteData) {
        return;
      }
      crudDelete(KEY, deleteData.id);
      setListUpdate(Date.now());
    },
    [deleteData]
  );

  //M messages
  const msg = (text, type) => {
    const id = uuidv4();
    const message = {
      id,
      text,
      type,
    };
    setMessages((m) => [...m, message]);
    setTimeout((_) => setMessages((m) => m.filter((m) => m.id !== id)), 5000);
  };
  

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12"
            style={{display: 'flex', alignItems: 'center'}}>
              <a href="">
                <img src={logo} alt="as" />
              </a>
              <button 
              className="header-button"
              onClick={() => setCreateModalData(true)}>
              Pridėti saskaitą
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div style={{ marginTop: "80px" }} className="row">
          <div className="col-12">
            <List
              name={name}
              setDeleteModalData={setDeleteModalData}
              setEditModalData={setEditModalData}
            />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <Delete
        deleteModalData={deleteModalData}
        setDeleteModalData={setDeleteModalData}
        setDeleteData={setDeleteData}
        msg={msg}
      />
      <Create
        setCreateData={setCreateData}
        msg={msg}
        createModalData={createModalData}
        setCreateModalData={setCreateModalData}
      />
      <Edit
        editModalData={editModalData}
        setEditModalData={setEditModalData}
        setEditData={setEditData}
        ammount={ammount}
        setAmmount={setAmmount}
        msg={msg}
      />
      <Messages messages={messages} />
    </>
  );
}
