import React, { useEffect } from "react";
import Modal from "../modal";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchStream, deleteStream } from "../../actions";

export default function StreamDelete() {
  let navigate = useNavigate();

  let { id } = useParams();

  const stream = useSelector((state) => state.streams[id]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchStream(id)(dispatch);
  }, [id, dispatch]);

  const onSubmit = () => {
    deleteStream(id)(dispatch);
    navigate("/");
  };

  const action = (
    <>
      <button className="ui button negative" onClick={() => onSubmit()}>
        Delete
      </button>
      {/* <button className="ui button" onClick={() => navigate("/")}>Cancel</button> */}
      <Link className="ui button" to="/">
        Cancel
      </Link>
    </>
  );

  const renderContent = () => {
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    } else {
      return `Are you sure you want to delete the stream with title: ${stream.title}?`;
    }
  };
  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={action}
      onDismiss={() => navigate("/")}
    />
  );
}
