<template>
    <footer>
            <div class="container">
                <article class="contact">
                    <div class="contact__items">
                        <h3>Contacto: +351 912 345 678</h3>
                    </div>
                    <div class="contact__items">
                        <h3>Email: apoio@mypark.com</h3>
                    </div>
                </article>
                <article class="adress">
                    <a href="https://www.google.com/maps" target="_blank"><h3>Avenida do Estacionamento 123, Porto</h3></a>
                </article>
            </div>

        </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    font-family: Montserrat, sans-serif;
    line-height: 1.5;
    color: rgba(12, 3, 27, 0.7);
    background: rgba(76, 201, 240, 0.1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
}

.container {
    width: 82%;
    margin: 0 auto;
}
img {
    display: block;
    width: 100%;
}
h1,
h2,
h3,
h4,
h5 {
    line-height: 1.2;
}
section {
    margin-top: 6rem;
}
section > h2 {
    text-align: center;
}
section > p {
    text-align: center;
    width: 42%;
    margin: 0.6rem auto 2.5rem;
}

footer {
    background: #0c031b;
    color: rgba(255, 255, 255, 0.7);
    padding-top: 4rem;
    margin-top: 4rem;
}
footer .container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) ;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    font-size: 0.85rem;
    padding-bottom: 3rem;
}
footer .container a {
    color: rgba(255, 255, 255, 0.7);
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
}
footer .container a:hover {
    color: #fff;
}
footer .container .contact {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
footer .container .contact .footer__logo {
    padding-bottom: 2rem;
}
footer .container .contact .contact__items {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
}
footer .container .adress {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
}
footer .container .footer__socials {
    padding-bottom: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 1rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
footer .copyright {
    text-align: center;
    font-size: 0.85rem;
    padding: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>