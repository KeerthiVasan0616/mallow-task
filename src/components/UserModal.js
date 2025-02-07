import React from "react";

const UserModal = ({ show, handleClose }) => {
  return (
    <>
      {/* Overlay Backdrop */}
      {show && <div className="modal-backdrop fade show"></div>}

      {/* Modal */}
      <div className={`modal fade ${show ? "show d-block" : ""}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create New User</h5>
              <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" placeholder="Enter first name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="Enter last name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Profile Image Link</label>
                  <input type="text" className="form-control" placeholder="Enter profile image link" required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
