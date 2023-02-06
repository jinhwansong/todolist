import "../App.css";

const Todolists = ({ item, delBtn, changeDone }) => {
  console.log(item)
  return (
    <>
      <li key={item.id} className={item.done ? 'on':''}>
        <i className="fa-solid fa-check check"onClick={() => changeDone(item.id)}></i>
        <div className="text_box">
          <em>{item.title}</em>
          <p>{item.context}</p>
        </div>
        <i className="fa-solid fa-trash-can trash" onClick={() => delBtn(item.id)} ></i>
      </li> 
    </>
  );
};

export default Todolists;
