import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FeedbacksRequestForm from "../components/FeedbacksRequestForm";
import Spinner from "../components/Spinner";
import { getAllFeedbacks, reset } from "../features/feedbacks/feedbackSlice";
import FeedbackItem from "../components/FeedbackItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { feedbacks, isLoading, isError, message } = useSelector(
    (state) => state.feedbacks
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getAllFeedbacks());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Добро пожаловать, {user && user.name}</h1>
        <p>Обратная связь от пользователей:</p>
      </section>
      <FeedbacksRequestForm />
      <section className="content">
        {feedbacks.length > 0 ? (
          <div className="feedbacks">
            {feedbacks.map((feedback) => (
              <FeedbackItem key={feedback._id} feedback={feedback} />
            ))}
          </div>
        ) : (
          <h3>К сожалению, записи отсутствуют.</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
