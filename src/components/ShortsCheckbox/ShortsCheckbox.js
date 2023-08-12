const ShortsCheckbox = ({onChange, isCheckboxValue}) => {
  const handleChangeCheckbox = (event) => {
    onChange(event);
  };

  return (
    <div className="shorts-checkbox">
      <input 
        className="shorts-checkbox__checkbox" 
        type="checkbox" 
        name="shorts-checkbox__checkbox"
        id="shorts-checkbox__checkbox"
        onChange={handleChangeCheckbox}
        checked={isCheckboxValue["shorts-checkbox__checkbox"] || ""}
        value={isCheckboxValue["shorts-checkbox__checkbox"]}
        required={false}
      ></input>
      <label className="shorts-checkbox__name">
        Короткометражки
      </label>
    </div>
  );
};

export default ShortsCheckbox;
