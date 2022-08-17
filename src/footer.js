import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
    BsFacebook,
    BsTwitter,
    BsInstagram,
    BsLinkedin,
    BsGithub
}
    from 'react-icons/bs';
function Footer() {
    return (
        <>
            <footer class="text-center text-white" style={{ backgroundColor: "#000000" }}>
                <div class="container pt-4">
                    <section>
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://m.facebook.com/100006499862197/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-facebook-f"><BsFacebook /></i></a>

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://twitter.com/beingsk45"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-twitter"></i><BsTwitter /></a>

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.instagram.com/_.shubham.kr.sharma._/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-instagram"></i><BsInstagram /></a>

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.linkedin.com/in/shubham-kumar19/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-linkedin"></i><BsLinkedin /></a>

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://github.com/Sks-19"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-github"></i><BsGithub /></a>
                    </section>

                    <div className='text-center p-4'>
                        © 2022 Copyright :
                        <h6 className='d-inline'> Shubham Kumar</h6>
                    </div>
                </div>

            </footer>

        </>
    );
}

export default Footer;