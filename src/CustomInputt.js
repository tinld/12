import React, { useState, useEffect } from "react";
import user from "./user.png";
import "./custom.css";

import Editable from "./Editable";

const CustomInput = ({
  cancellor,
  parentId,
  value,
  edit,
  submit,
  handleCancel
}) => {
  const [text, setText] = useState(value === undefined ? "" : value);

  useEffect(() => {
    console.log("console > ", value);
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <form>
      <div className="form">
        <div className="row">
          {" "}
          <img src={user} style={{ width: 80, height: 80 }} />
          <div className="row">
            <div className="arrow-left"></div>
            <div className="input-div">
              <span className="input-name">Riya Negi</span>
              {/* <textarea
                rows="2"
                className="input-box"
                type="text"
                placeholder="Type your reply here."
                component="input"
                value={text}
                onChange={handleChange}
              ></textarea> */}

              <Editable
                value={text}
                onChange={handleChange}
                // onChange={(evt) => {
                //   setTextEditable(evt.target.value);
                // }}
                // onCancel={(evt) => {
                //   setTextEditable("");
                // }}
                // onPost={(evt) => {
                //   console.log("onPost >", textEditable);
                // }}
                // parentId={props.parentId}
                // cancellor={props.cancellor}
                // value={props.value}
                // edit={props.edit}
                // submit={props.submit}
                // handleCancel={props.handleCancel}
              />
            </div>
          </div>
        </div>
        <div className="btn-div">
          <button
            className="post-btn"
            onClick={() => submit(cancellor, text, parentId, edit, setText)}
            type="submit"
            disabled={!text}
          >
            Post
          </button>
          <button
            className="cancel-btn"
            onClick={() => handleCancel(cancellor, edit)}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default CustomInput;
