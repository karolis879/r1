export default function Delete({deleteModalData, setDeleteModalData, setDeleteData, msg}) {
  
  if (null === deleteModalData) {
    return null;
  }

  //jei nulis modaldata tada setdelete nulis
  const destroy = () => {
    if (deleteModalData.balance > 0) {
      msg('Per daug pinigu')
    } else {
      setDeleteData(deleteModalData);
      setDeleteModalData(null);
      
    }
  };

    return (
    <div style={{display: 'block', backgroundColor: '#282c3430'}} className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are you sure to delete this account?</h5>
            <button
              type="button"
              className="btn-close btn" onClick={_ => setDeleteModalData(null)}
            ></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="list-button" onClick={_ => setDeleteModalData(null)}
            >
              Cancel
            </button>
            <button type="button" className="list-button red" onClick={destroy}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
