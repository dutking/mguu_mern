import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllFeedbacks } from "../features/feedbacks/feedbackSlice";

function FeedbacksRequestForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllFeedbacks({ text }));
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Трек</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Показать
          </button>
        </div>
      </form>
    </section>
  );
}

export default FeedbacksRequestForm;
