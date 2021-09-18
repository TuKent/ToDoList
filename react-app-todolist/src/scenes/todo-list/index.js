import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { increase, decrement, editContent } from './todoSlide.js';
import MyVerticallyCenteredModal from './components/editModal';
function ToDoList() {

  const [valueInput, setValueInPut] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [infoModal, setInfoModal] = useState("");

  const getTodoList = useSelector((state) => state.todolist)
  const dispatch = useDispatch();


  const handleAdd = () => {
    const action = increase(valueInput);
    dispatch(action);
  }

  const handleRemove = (id) => {
    const action = decrement(id);
    dispatch(action);
  }


  const renderToDoList = () => {
    // var convertTodo = Object.values(getTodoList)

    let arrX = []
    for (let index = 0; index < getTodoList.length; index++) {
      const element = getTodoList[index];
      arrX.push(
        <div className="col-12 d-flex justify-content-between mb-2" key={element.id}>
          <div className="">
            {element.content}
          </div>
          <div className="">
            <button className="btn btn-primary mr-2" value={element.id} onClick={() => {handleModal(element)} }>
              <FontAwesomeIcon icon={faEdit} />
            </button>

            <button className="btn btn-danger" value={element.id} onClick={() => { handleRemove(element.id) }}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      )
    }
    return arrX;
  }

  const handleModal = (element) => {
    setInfoModal(element)
    setModalShow(true)
  }

  return (
    <div className="row flex-container">
      <div className="col-lg-5 col-auto">
        <div className="card">
          <div className="card-header text-center text-uppercase">
            <h3> ToDo App</h3>
          </div>
          <div className="card-body">
            <div className="row mb-2">
              <div className="col-12">
                <div className="d-flex justify-content-between">
                  <input type="text" value={valueInput} className="form-control w-75" onChange={(e) => { setValueInPut(e.target.value) }} />
                  <button className="btn btn-success" onClick={handleAdd}>
                    <FontAwesomeIcon icon={faPlusSquare} />
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              {renderToDoList()}
            </div>

            <MyVerticallyCenteredModal
              info = {infoModal}
              show={modalShow}
              onHide={() => setModalShow(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ToDoList;