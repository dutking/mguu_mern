import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllApplications } from "../features/application/applicationSlice";

function ApplicationsRequestForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllApplications({ text }));
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        {/* <div className="form-group">
          <label htmlFor="text">Трек</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div> */}
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Показать
          </button>
        </div>
      </form>
    </section>
  );
}

export default ApplicationsRequestForm;
