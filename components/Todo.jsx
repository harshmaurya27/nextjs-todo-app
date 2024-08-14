import React from "react";

const Todo = ({
  id,
  title,
  description,
  mongoId,
  complete,
  deletedTodo,
  completeTodo,
}) => {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
      >
        {id + 1}
      </th>
      <td className={`px-6 py-4 ${complete ? "line-through" : ""}`}>{title}</td>
      <td className={`px-6 py-4 ${complete ? "line-through" : ""}`}>
        {description}
      </td>
      <td className="px-6 py-4">{complete ? "Completed" : "Pending"}</td>
      <td className="px-6 py-4 flex gap-1">
        <button
          className="py-2 px-4 bg-red-500 texy-white"
          onClick={() => deletedTodo(mongoId)}
        >
          Delete
        </button>
        {complete ? (
          ""
        ) : (
          <button
            className="py-2 px-4 bg-green-500 texy-white"
            onClick={() => completeTodo(mongoId)}
          >
            Done
          </button>
        )}
      </td>
    </tr>
  );
};

export default Todo;
