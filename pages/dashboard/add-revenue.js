import DashBoardWrapper from "../../components/DashBoardWrapper";
import { baseUrl } from "../../context/baseUrl";
import { useState } from "react";
import Select from "react-select";
import { useGlobalContext } from "../../context/context";
import classes from "./add-revenue.module.css";

export default function AddRevenue() {
  const { user, token } = useGlobalContext();
  const url = `${baseUrl}/revenue/new`;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState([]);

  const options = [
    { label: "Transport", value: "transport" },
    { label: "Street Naming", value: "street_naming" },
    { label: "Tenement Rate", value: "tenement_rate" },
    { label: "Toll Gate", value: "toll_gate" },
    { label: "School Fees", value: "school_fees" },
    { label: "Market", value: "market" },
  ];
  const handleCategory = (category) => {
    setCategory(category);
  };
  const addRevenue = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        amount: amount,
        comment: comment,
        category: category.value,
      }),
    };
    await fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <DashBoardWrapper>
      <form className={classes.form}>
        <header className={classes.form_header}>
          <div className={classes.main_text}>Add Revenue</div>
          <div className={classes.sub_text}>
            Please fill the following fields carefully.
          </div>
        </header>
        <div className={classes.group}>
          <div className={classes.input_container}>
            <label>Title</label>
            <input
              value={title}
              placeholder="Revenue title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.input_container}>
            <label>Amount</label>
            <input
              value={amount}
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className={classes.input_container}>
            <label>Category</label>
            <Select
              value={category}
              placeholder="Category"
              options={options}
              onChange={handleCategory}
            />
          </div>
          <div className={classes.input_container}>
            <label>Comment</label>
            <input
              value={comment}
              placeholder="Comment"
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        <button onClick={addRevenue}>Add revenue</button>
      </form>
    </DashBoardWrapper>
  );
}
