// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function ResultList(props) {
  console.log(props);
  
  return (
    <ul className="list-group">
      {props.results.map((result) => (
        <li style={{listStyleType: 'none'}} className="list-group-item" key={result.id}>
          <img
            alt={result.avatar_url}
            className="img-fluid"
            src={result.avatar_url}
            style={{width: '300px', borderRadius: '30px 30px 0 0'}}
            
          />
          <section>
            <a href={result.html_url}><h2>{result.login}</h2></a>
            <h3>Email: email@email.com</h3>
            <h3>Company: {result.location}</h3>
          </section>

        </li>
      ))}
    </ul>
  );
}

export default ResultList;
