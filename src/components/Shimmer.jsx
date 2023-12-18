import Paper from "@mui/material/Paper";

function HomeShimmer() {
  return (
    <Paper elevation={3}>
      <div className="search-shimmer"></div>
      <div data-testid="shimmer" className="cardlist">
        {Array(8)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </Paper>
  );
}
export default HomeShimmer;
