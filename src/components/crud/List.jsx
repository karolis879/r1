import { useState } from "react";

export default function List({
  name,
  setDeleteModalData,
  setEditModalData,
}) {
  //cia pranyksta
  const destroy = (c) => {
    setDeleteModalData(c);
  };

  //cia paspaudus atsiranda
  const edit = (c) => {
    setEditModalData(c);
    console.log(c);
  };

  return (
    <section className="intro">
      <div className="gradient-custom-1 h-100">
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="table-responsive bg-white">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Vardas</th>
                        <th scope="col">Pavardė</th>
                        <th scope="col">Balansas</th>
                        <th scope="col" style={{ textAlign: "center" }}>
                          Veiksmas
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {name && name.length ? (
                        name
                          .slice()
                          .sort((a, b) => a.lastName.localeCompare(b.lastName))
                          .map((c) => (
                            <tr key={c.id}>
                              <td>{c.name}</td>
                              <td>{c.lastName}</td>
                              <td>{c.balance}€</td>
                              <td>
                                <div className="list-button">
                                  <button
                                    className="list-button red"
                                    onClick={(_) => destroy(c)}
                                  >
                                    Ištrinti
                                  </button>
                                  <button
                                    className="list-button green"
                                    onClick={(_) => edit(c)}
                                  >
                                    Redaguoti balansą
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                      ) : (
                        <tr>
                          <td colSpan="4">Nieko nera</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

