import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import { useParams } from "react-router";
import { useEffect } from "react";
import StreamForm from "./StreamForm";
import _ from "lodash";

const StreamEdit = (props) => {
  let { id } = useParams();

  const streams = useSelector((state) => state.streams);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchStream(id)(dispatch);
  }, []);

  const onSubmit = (formValues) => {
    editStream(id, formValues)(dispatch);
  };

  const renderEdit = () => {
    if (streams[id] === null) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            onSubmit={onSubmit}
            initialValues={streams[id]}
            // initialValues={_.pick(streams[id], "title", "description")}
          />
        </div>
      );
    }
  };

  return renderEdit();
};
export default StreamEdit;
