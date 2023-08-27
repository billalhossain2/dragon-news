import NavigationBar from "./shared/navigationBar/NavigationBar";

const Career = () => {
  return (
    <div className="mt-5">
    <NavigationBar></NavigationBar>
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="mb-4">Join Our Team</h1>
          <p>
            We are always looking for talented individuals to join our team and contribute to our mission of creating innovative solutions.
          </p>
          <h2>Current Job Openings</h2>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Frontend Developer</h5>
              <p className="card-text">We are seeking a skilled frontend developer to create beautiful and responsive user interfaces.</p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Backend Engineer</h5>
              <p className="card-text">Join our backend engineering team and work on building robust and scalable server-side systems.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">UI/UX Designer</h5>
              <p className="card-text">We are looking for a creative UI/UX designer to craft intuitive and user-centered designs.</p>
            </div>
          </div>
          <p className="mt-4">
            If you're interested in any of the positions above, please send your resume and portfolio to careers@example.com.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Career;
