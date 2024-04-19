export const DifficultyPicker = () => {
  return (
    <select id="cars" defaultValue={"hard"}>
      <option value="easy">Könnyű</option>
      <option value="medium">Közepes</option>
      <option value="hard">Verhetetlen</option>
      <option value="friend">Játék egy baráttal</option>
    </select>
  );
};
