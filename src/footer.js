import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


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
            ><i class="fab fa-facebook-f">FB</i></a>

            <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
            ><i class="fab fa-twitter"></i>Twitter</a>

            <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-instagram"></i>Insta</a>

            <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-linkedin"></i>Linkedin</a>
      
            <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-github"></i>Github</a>
        </section>
        </div>
  
    </footer>

    </>
    );
}

export default Footer;