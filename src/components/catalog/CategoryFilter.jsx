import "../../assets/styles/catalog/categoryFilter.css";

export function CategoryFilter({ setSelectedFilter, selectedFilter }) {
  function handleChange(event) {
    setSelectedFilter(event.target.value);
  }
  return (
    <div id="select-wrapper">
      <select
        id="booksFilter"
        className="roboto-white"
        name="option"
        onChange={handleChange}
        //This value is set for when the system redirects from a booklanding page, to set the filter by genre
        value={selectedFilter}
      >
        <option value="/books" defaultValue>
          Select a genre
        </option>
        <option value="/books/categories/Classic">Classics</option>
        <option value="/books/categories/Fantasy">Fantasy</option>
        <option value="/books/categories/Horror">Horror</option>
        <option value="/books/categories/Romance">Romance</option>
      </select>
    </div>
  );
}
