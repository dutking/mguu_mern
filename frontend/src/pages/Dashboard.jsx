import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ApplicationsRequestForm from "../components/ApplicationsRequestForm";
import Spinner from "../components/Spinner";
import {
  getAllApplications,
  reset,
} from "../features/applications/applicationSlice";
import ApplicationItem from "../components/ApplicationItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { applications, isLoading, isError, message } = useSelector(
    (state) => state.applications
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getAllApplications());

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
      <ApplicationsRequestForm />
      <section className="content">
        {applications.length > 0 ? (
          <div className="applications">
            {applications.map((application) => (
              <ApplicationItem
                key={application._id}
                application={application}
              />
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
