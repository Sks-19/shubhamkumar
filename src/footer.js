import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BsFacebook,
BsTwitter,
BsInstagram,
BsLinkedin,
BsGithub } 
    from 'react-icons/bs';
function Footer() {
    return (
        <>
        <footer class="text-center text-white" style={{backgroundColor: "white"}}>
            <div class="container pt-4">
            <section class="mb-4">
            <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
            ><i class="fab fa-facebook-f"><BsFacebook /></i></a>

            <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
            ><i class="fab fa-twitter"></i><BsTwitter /></a>

            <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-instagram"></i><BsInstagram /></a>

            <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-linkedin"></i><BsLinkedin /></a>
      
            <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-github"></i><BsGithub /></a>
        </section>
        </div>
  
    </footer>

    </>
    );
}

export default Footer;