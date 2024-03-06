import css from "./HistoryForm.module.css";

const HistoryForm = ({ setEmail }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setEmail(email);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Enter your email to get the your orders history
      </label>
      <input
        className={css.input}
        type="email"
        name="email"
        placeholder="enter your email"
        required
      />
      <button type="submit" className={css.button}>
        Get history
      </button>
    </form>
  );
};

export default HistoryForm;
