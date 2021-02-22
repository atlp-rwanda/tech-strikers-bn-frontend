import React, { Component } from "react";

export default class model extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="container">
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>

              <div class="modal-body">{this.props.message}</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
