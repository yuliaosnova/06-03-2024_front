import css from "./UserForm.module.css";

const UserForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={css.user_form}>
      <div className={css.block}>
        <label className={css.label}>Address:</label>
        <input
          className={css.input}
          type="text"
          name="address"
          placeholder="enter your adress"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.block}>
        <label className={css.label}>Email:</label>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.block}>
        <label className={css.label}>Phone:</label>
        <input
          className={css.input}
          type="text"
          name="phone"
          placeholder="enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.block}>
        <label className={css.label}>Name:</label>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default UserForm;
