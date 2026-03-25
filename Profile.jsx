import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Profile() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
AOS.init({
  duration: 1000,
  once: true,        // ek j vaar animate thase
  easing: "ease-in-out",
});
  return (
    <>
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#" id="navbar">
            Dharm
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#Home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#About">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#Skill">Skill</a></li>
              <li className="nav-item"><a className="nav-link" href="#Resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#Profile">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      
      <section
        id="Home"
        style={{
          height: "100vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
        className="d-flex align-items-center"
      >
        <div className="container text-center animate__animated animate__fadeIn">
          <h1 className="display-4 fw-bold">
            Hello, I'm Dharm Maradiya
          </h1>
          <p className="lead">
            Full Stack Developer | React | PHP | SQL
          </p>
          <a href="#About" className="btn btn-warning mt-3">
            Explore More
          </a>
        </div>
      </section>
   

   <div className="container mt-5" id="About">
  <div className="card shadow-lg p-3" data-aos="fade-up">
    
    <h4 className="text-center mb-4">About Me</h4>

    <div className="row align-items-center">

      {/* 👤 LEFT SIDE IMAGE */}
    <div className="col-md-4 text-center" data-aos="fade-right">
        <img 
          src="https://media-del3-1.cdn.whatsapp.net/v/t61.24694-24/628195457_1459546322210582_4577452972173641186_n.jpg?ccb=11-4&oh=01_Q5Aa4AGL-H7-bR9RePew7sr876vkknBXvd-hlI6FDUNfwoEdxw&oe=69D11BE6&_nc_sid=5e03e0&_nc_cat=105"   // 👉 ahi tamari image mukjo
          alt="Dharm"
          className="img-fluid rounded-circle shadow"
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
        />
      </div>

      {/* 📝 RIGHT SIDE CONTENT */}
      <div className="col-md-8" data-aos="fade-left">
        <h3>Dharm Maradiya</h3>
        <p>
          I am a passionate <b>Full Stack Web Developer</b> from India.  
          I love creating modern, responsive, and user-friendly web applications.
        </p>

        <div className="row mt-3">
          <div className="col-md-6">
            <p><b> Birthday:</b> 19 June 2008</p>
            <p><b> Phone:</b> +91 7984250733</p>
            <p><b> City:</b> Gujarat, India</p>
          </div>

          <div className="col-md-6">
            <p><b> Degree:</b> BCA (Pursuing)</p>
            <p><b> Email:</b> dharm1906@gmail.com</p>
            <p><b> Freelance:</b> Available</p>
          </div>
        </div>

        <p className="mt-3">
          I enjoy solving real-world problems using code and continuously improving my skills in modern web technologies.
        </p>
      </div>

    </div>
  </div>
</div>
      
    <section id="Skill" className="py-5 bg-light">
   
  <div className="container">

    <h2 className="text-center mb-5" data-aos="fade-down">
      My Skills
    </h2>

    <div className="row">

    
      <div className="col-md-6" data-aos="fade-right">

        <h5>Technical Skills</h5>

        <p>HTML</p>
        <div className="progress mb-3">
          <div className="progress-bar bg-warning" style={{width:"100%"}}>100%</div>
        </div>

        <p>CSS</p>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{width:"90%"}}>90%</div>
        </div>

        <p>JavaScript</p>
        <div className="progress mb-3">
          <div className="progress-bar bg-info" style={{width:"75%"}}>75%</div>
        </div>

        <p>PHP</p>
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" style={{width:"80%"}}>80%</div>
        </div>

        <p>SQL / DBMS</p>
        <div className="progress mb-3">
          <div className="progress-bar bg-dark" style={{width:"85%"}}>85%</div>
        </div>

      </div>

     
      <div className="col-md-6" data-aos="fade-left">

        <h5>Professional Skills</h5>

        <ul className="list-group mb-4">
          <li className="list-group-item">✔ Quick Learner</li>
          <li className="list-group-item">✔ Problem Solving</li>
          <li className="list-group-item">✔ Team Work</li>
          <li className="list-group-item">✔ Communication Skills</li>
        </ul>

        <h5>Tools & Technologies</h5>

        <div className="d-flex flex-wrap gap-2 mt-3">
          <span className="badge bg-dark">React</span>
          <span className="badge bg-primary">Bootstrap</span>
          <span className="badge bg-success">Git</span>
          <span className="badge bg-warning text-dark">GitHub</span>
          <span className="badge bg-info text-dark">VS Code</span>
        </div>

      </div>

    </div>

  </div>
</section>


     
      <div 
  className="section-bg"
  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1526378722484-bd91ca387e72)" }}
  id="Resume"
>  
 </div> 
<div className="container mt-5" id="Resume">

 <div className="card shadow-lg p-3" data-aos="zoom-in">

    <h4 className="text-center mb-4">Resume</h4>

    <div className="row">

   
      <div className="col-md-6">
        
        <h5 className="mb-3 text-primary">Summary</h5>
        <p>
          Passionate Full Stack Developer with strong knowledge of frontend and backend technologies.
          I love building responsive and modern web applications.
        </p>

        <h5 className="mt-4 text-primary">Education</h5>

        <div className="mb-3">
          <h6>Bachelor of Computer Application (BCA)</h6>
          <p>2024 - Present</p>
          <p>Shree Umiya BCA College</p>
        </div>

        <div className="mb-3">
          <h6>Higher Secondary</h6>
          <p>2022 - 2024</p>
          <p>Gujarat Board</p>
        </div>

      </div>

      {/* 🔹 RIGHT SIDE */}
      <div className="col-md-6">

        <h5 className="mb-3 text-success">Experience</h5>

        <ul>
          <li>Created multiple responsive websites using React and Bootstrap</li>
          <li>Developed Portfolio Website with animations</li>
          <li>Built Todo App with CRUD functionality</li>
          <li>Worked with API integration in React</li>
        </ul>

        <h5 className="mt-4 text-success">Skills</h5>

        <ul>
          <li>HTML, CSS, Bootstrap</li>
          <li>JavaScript, React JS</li>
          <li>PHP, MySQL</li>
          <li>Git & GitHub</li>
        </ul>

      </div>

    </div>

  </div>
</div>

     <div 
  className="section-bg"
  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c)" }}
  id="Profile"
></div>
      <div className="container">
     <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">

  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" className="card-img-top" />
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72" className="card-img-top" />
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d" className="card-img-top" />
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" className="card-img-top" />
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" className="card-img-top" />
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" className="card-img-top" />
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" className="card-img-top" />
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" className="card-img-top" />
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd" className="card-img-top" />
    </div>
  </div>

</div>
</div>

   
      
      <section id="contact" className="container py-5">
        
        <h2 className="text-center mb-4">Contact</h2>
        <form>
          <input className="form-control mb-3" placeholder="Name" />
          <input className="form-control mb-3" placeholder="Email" />
          <textarea className="form-control mb-3" rows="4" placeholder="Message"></textarea>
          <button className="btn btn-dark">Send</button>
        </form>
      </section>

     
      <footer className="bg-dark text-white text-center p-3">
        © 2026 Dharm Maradiya | Portfolio Website
      </footer>

      
      
    </>
  );
}