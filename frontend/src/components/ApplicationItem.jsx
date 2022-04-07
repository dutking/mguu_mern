function ApplicationItem({ application }) {
  return (
    <div className="application">
      <div>
        <p className="fieldName">Дата заявки:</p>
        <p className="data">
          {new Date(application.createdAt).toLocaleString("ru-RU")}
        </p>
      </div>
      <div>
        <p className="fieldName">ФИО:</p>
        <p className="data">{application.name}</p>
      </div>
      <div>
        <p className="fieldName">Телефон:</p>
        <p className="data">{application.phone}</p>
      </div>
      <div>
        <p className="fieldName">Эл. почта:</p>
        <p className="data">{application.email}</p>
      </div>
      <div>
        <p className="fieldName">Организация:</p>
        <p className="data">{application.organization}</p>
      </div>
      <div>
        <p className="fieldName">Должность:</p>
        <p className="data">{application.occupation}</p>
      </div>
      <div>
        <p className="fieldName">Подчиненные :</p>
        <p>
          <p className="data">
            В прямом подчинении: {application.subordinates.direct}
          </p>
          <p className="data">
            В функциональном подчинении: {application.subordinates.functional}
          </p>
        </p>
      </div>
      <div>
        <p className="fieldName">Опыт:</p>
        <p className="data">{application.experience}</p>
      </div>
      <div>
        <p className="fieldName">Располагаемое время:</p>
        <p className="data">{application.timeAvailable}</p>
      </div>
      <div>
        <p className="fieldName">Сильные стороны:</p>
        <p className="data">{application.strengths}</p>
      </div>
      <div>
        <p className="fieldName">Зоны развития:</p>
        <p className="data">{application.devZones}</p>
      </div>
      <div>
        <p className="fieldName">Сложности:</p>
        <p className="data">{application.complications}</p>
      </div>
      <div>
        <p className="fieldName">Актуальная задача:</p>
        <p className="data">{application.task}</p>
      </div>
      <div>
        <p className="fieldName">Приоритетные цели:</p>
        <p className="data">{application.goal}</p>
      </div>
    </div>
  );
}

export default ApplicationItem;
