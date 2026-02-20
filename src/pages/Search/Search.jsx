import React, { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { allSearchData } from "../../data/siteData";
import "./Search.css";

/**
 * Search page component.
 * Retrieves a search query from the URL parameters, filters `allSearchData` based on the query,
 * and displays the matching results in a grid. Provides links to relevant pages.
 */
export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  /**
   * Memoized computation of search results.
   * Filters `allSearchData` based on the query, matching against name, description, or category.
   * Re-runs only when the `query` changes.
   */
  const results = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return allSearchData.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="searchPage">
      {/* Search Header Section */}
      <div className="searchHeader">
        <h1>Search Results</h1>
        <p>
          Found {results.length} result(s) for "{query}"
        </p>
      </div>

      {/* Search Results Display Section */}
      <div className="searchResultsContainer">
        {results.length > 0 ? (
          <div className="resultsGrid">
            {results.map((item) => (
              <div key={item.id} className="resultCard">
                {item.image && (
                  <div className="resultImageWrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="resultImage"
                    />
                  </div>
                )}
                <div className="resultContent">
                  <span className="resultCategory">{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  {/* Logic to determine where to link based on category */}
                  {item.category === "Flavours" && (
                    <Link to="/flavours" className="resultLink">
                      View Flavours →
                    </Link>
                  )}
                  {item.category === "Offers" && (
                    <Link to="/offers" className="resultLink">
                      View Offer →
                    </Link>
                  )}
                  {/* Assuming 'Pages' category items have a 'link' property for navigation */}
                  {item.category === "Pages" && (
                    <Link to={item.link} className="resultLink">
                      Go to Page →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* No Results Found Section */
          <div className="noResults">
            <h3>No results found</h3>
            <p>Try checking your spelling or use different keywords.</p>
            <Link to="/" className="backHomeBtn">
              Back to Home
            </Link>
          </div>
        )}
      </div>
      {/* <div className="bottomSpace"></div> */}
    </div>
  );
}
