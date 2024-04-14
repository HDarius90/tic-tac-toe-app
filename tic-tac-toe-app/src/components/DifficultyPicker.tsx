export const DifficultyPicker = () => {
  return (
    <>
      <select id="cars">
        <option value="easy">Könnyű</option>
        <option value="medium" selected>
          Közepes
        </option>
        <option value="hard">Verhetetlen</option>
        <option value="friend">Játék egy baráttal</option>
      </select>
    </>
  );
};

