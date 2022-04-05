function ApplicationItem({ application }) {
  return (
    <div className="application">
      <div>{new Date(application.createdAt).toLocaleString("ru-RU")}</div>
      <h2>{application.name}</h2>
    </div>
  );
}

export default ApplicationItem;
