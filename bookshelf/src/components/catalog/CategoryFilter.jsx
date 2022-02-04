import "../../assets/styles/catalog/categoryFilter.css";

export function CategoryFilter() {
  return (
    <div id="select-wrapper">
      <select className="roboto-white" name="select">
        <option value="" defaultValue>
          Select a genre
        </option>
        <option value="value1">Classics</option>
        <option value="value2">Fantasy</option>
        <option value="value3">Horror</option>
      </select>
    </div>
  );
}
