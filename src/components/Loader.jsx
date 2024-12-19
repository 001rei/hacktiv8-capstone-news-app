export default function Loader() {
  return (
    <div className="text-center my-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>Loading articles...</p>
    </div>
  );
}