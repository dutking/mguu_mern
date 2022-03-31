function FeedbackItem({ feedback }) {
  return (
    <div className="feedback">
      <div>{new Date(feedback.createdAt).toLocaleString("ru-RU")}</div>
      <h2>{feedback.text}</h2>
    </div>
  );
}

export default FeedbackItem;
