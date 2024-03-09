const AddTask = ({ handleSubmit, editid, task, setTask }) => {
  return (
    <section >
     <div className="addTask">
     <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task}
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">{editid ? "Update" : "Add"}</button>
      </form>
     </div>
    </section>
  );
};

export default AddTask;
