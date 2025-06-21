import React from 'react';




const BootstrapCarousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://imgs.search.brave.com/YCFMFgnqHmP-Z8SIIGnDSOCdYvwKR4vYeY_3fB3RVUk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/OTk5NDMwOS9waG90/by92b3RlLWluZGlh/LXZvdGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXhBVHdw/TXQ2U2FnOXRMbW50/dWNZRVJzaEdOOFZu/UUViVS03dG55YnNG/R1k9" alt="Slide 1" style={{ height: "55vh",width:"100%", objectFit: "fill" }}/>
          <div className="carousel-caption d-none d-md-block">
            <h3>Cast Your Vote</h3>
            <p>Make your voice heard in a secure election.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://imgs.search.brave.com/4QG9JkfUFusjauPRypWbqcumLfHu0vXjpNbYnaeeRwQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzM2LzQx/LzM2MF9GXzI3OTM2/NDExMV8xandjdm00/elJ6V0NkcFAxdkdh/YUYwRnQ4eEIzTVdk/RS5qcGc" alt="Slide 2" style={{ height: "55vh",width:"100%", objectFit: "fill" }}/>
          <div className="carousel-caption d-none d-md-block">
            <h3>Manage Elections</h3>
            <p>Create and control elections with ease.</p>
          </div>
        </div>
          
        <div className="carousel-item">
          <img src="https://imgs.search.brave.com/k2LduwwZXQVLtwlkA8qf9e8OnFSNpwQHCgN9n_ivBxs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzkzLzQ4LzI0/LzM2MF9GXzk5MzQ4/MjQ1OF9wWFNsWXla/MjlENG1sSm9nTDBy/ZHA5b3NlbFRvZklH/aS5qcGc" alt="Slide 3" style={{ height: "55vh",width:"100%" ,objectFit: "fill" }} />
          <div className="carousel-caption d-none d-md-block">
            <h3>Submit Your Vote at One Click</h3>
            <p>View profiles and cast your vote confidently.</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BootstrapCarousel;
