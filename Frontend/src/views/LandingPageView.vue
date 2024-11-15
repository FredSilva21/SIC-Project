<template>
    <div>
        <nav>
            <div class="container">
                <h3>MyPark</h3>
                    
                <ul id="nav__items">
                    <li><a href="/login" class="btn login-btn" ><i class='bx bxl-whatsapp' ></i>Login/Registo</a></li>
                </ul>
        
                <button id="open__nav-btn"><i class='bx bx-menu'></i></button>
                <button id="close__nav-btn"><i class='bx bx-x' ></i></button>
            </div>
        </nav>
        <!-----------------END OF NAV MENU---------------->
            <header>
                <div class="container">
                    <div class="header__content">
                        <h1>Soluções inteligentes para facilitar o seu estacionamento</h1>
                        <p>Oferecemos serviços práticos e confiáveis para a gestão do seu estacionamento.</p>
                    </div>
                    <div class="header__image">
                    </div>
                </div>
            </header>
        
            <!---------END OF HEADER-------------------->    
            <section id="services">
                <h2>Os nossos Serviços</h2>
                <p>No MyPark, oferecemos uma variedade de serviços para tornar a sua experiência de estacionamento mais prática e eficiente.</p>
        
                <div class="container">
                    <article>
                        <i class='bx bxs-book-content'></i>
                        <div>
                           <h4>Visualização de Parques</h4> 
                           <small>Veja a localização e disponibilidade dos parques de estacionamento na sua área para escolher o que mais lhe convém.</small>
                        </div>
                    </article>
                    <article>
                        <i class='bx bxs-book-content'></i>
                        <div>
                           <h4>Reserva de Vagas</h4> 
                           <small>Permite reservar uma vaga de estacionamento com antecedência para garantir que tem um espaço disponível ao chegar.</small>
                        </div>
                    </article>
                    
                    <article>
                        <i class='bx bxs-book-content'></i>
                        <div>
                           <h4>Pagamentos Integrados</h4> 
                           <small>Efetue o pagamento do estacionamento diretamente pela aplicação, sem complicações.</small>
                        </div>
                    </article>
                </div>
            </section>
        
        <!------------------END OF THE SERVICES------------------->

        <section id="appointment">
            <div class="container">
                <div class="info">
                    <h2>Fale Conosco, queremos ouvi-lo!</h2>
                    <p>A sua opinião é importante para nós. Não hesite em partilhar as suas dúvidas ou sugestões. Estamos sempre prontos para ouvir e ajudar.</p>
        
                    <article>
                        <div>
                            <h4>Suporte ao Cliente</h4>
                            <small>
                                A nossa equipa de suporte está disponível para ajudá-lo com qualquer questão relacionada com o uso do MyPark. Estamos aqui para garantir que a sua experiência de estacionamento seja simples e eficiente.
                            </small>
                        </div>
                    </article>
        
                    <article>
                        <div>
                            <h4>Tecnologia de Estacionamento</h4>
                            <small>
                                Utilizamos tecnologia de ponta para garantir a melhor experiência de estacionamento inteligente. Desde a visualização de vagas disponíveis até a reserva e pagamento online, estamos sempre a inovar para facilitar a sua vida.
                            </small>
                        </div>
                    </article>
        
                    <article>
                        <div>
                            <h4>Feedback de Estacionamento</h4>
                            <small>
                                Queremos saber a sua opinião sobre o serviço de estacionamento. Envie-nos o seu feedback para melhorar continuamente a experiência do MyPark.
                            </small>
                        </div>
                    </article>
                </div>
            </div>
        </section>
        <!------------------END OF THE APPOINTMENT------------------->     
        <Footer />
    </div>
</template>

<script>
    import Footer from "@/components/Footer.vue";
    export default {
        components: {
            Footer
        },
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

.btn {
    display: block;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 0.75rem 1rem;
    border-radius: 0.4rem;
    background: #ffffff;
    cursor: pointer;
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
    color: black;
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
    gap: 0.3rem;
}

.btn i {
    color: inherit;
}
.btn:hover {
    background: #f0f0f0;
    -webkit-box-shadow: 0 1rem 1.6rem rgba(12, 3, 27, 0.15);
    box-shadow: 0 1rem 1.6rem rgba(12, 3, 27, 0.15);
}

.login-btn {
    color: black !important;
}
.btn-primary {
    display: block;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 0.75rem 1rem;
    border-radius: 0.4rem;
    background: #480ca8;
    cursor: pointer;
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
    color: #fff;
}
.btn-primary:hover {
    background: #580fce;
    -webkit-box-shadow: 0 1rem 1.6rem rgba(12, 3, 27, 0.15);
    box-shadow: 0 1rem 1.6rem rgba(12, 3, 27, 0.15);
}

nav {
    width: 100vw;
    height: 5rem;
    position: fixed;
    z-index: 10;
    display: -ms-grid;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, #480ca8, #4cc9f0);
    color: #fff;
    -webkit-box-shadow: 0 1rem 1rem rgba(12, 3, 27, 0.1);
    box-shadow: 0 1rem 1rem rgba(12, 3, 27, 0.1);
}
nav h1,
nav h2,
nav h3,
nav h4,
nav h5 {
    color: #fff;
}
nav.window-scroll {
    background: #fff;
}
nav.window-scroll .container button {
    color: #0c031b;
}
nav.window-scroll .container a {
    color: #0c031b;
}
nav.window-scroll .container a > h3 {
    color: #0c031b;
}
nav.window-scroll .container a.btn {
    color: #fff;
}
nav .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
nav .container ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 3rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
nav .container button {
    display: none;
}
nav .container a {
    color: #fff;
    font-weight: 400;
    font-size: 0.9rem;
}
nav .container .nav__logo {
    color: #fff;
}

header {
    background: linear-gradient(135deg, #480ca8, #4cc9f0);
    color: #fff;
    height: 100vh;
    display: -ms-grid;
    display: grid;
    place-items: center;
    overflow: hidden;
}
header h1,
header h2,
header h3,
header h4,
header h5 {
    color: #fff;
}
header .container {
    margin-top: 3rem;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 46% 46%;
    grid-template-columns: 46% 46%;
    gap: 8%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
header .container .header__content h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    letter-spacing: -3px;
    font-weight: 300;
}
header .container .header__content p {
    margin: 1rem 0 2rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
}


#services .container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) ;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}
#services article {
    background: linear-gradient(135deg, #480ca8, #4cc9f0);
    color: #fff;
    padding: 1.5rem;
    border-radius: 1rem;
    display: Flex;
    gap: 1.5rem;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
}
#services article h1,
#services article h2,
#services article h3,
#services article h4,
#services article h5 {
    color: #fff;
}
#services article i {
    font-size: 1.7rem;
}
#services article:hover {
    margin-top: -0.5rem;
}

#appointment .container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 47% 47%;
    grid-template-columns: 47% 47%;
    gap: 6%;
}
#appointment .container .info p {
    margin: 0.5rem 0 2rem;
}
#appointment .container .info article {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}
#appointment .container .info article small {
    margin-top: 0.4rem;
    display: block;
}
#appointment .container form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 1.4rem;
}
#appointment .container form .form__group label {
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
    display: inline-block;
    font-weight: 600;
}
#appointment .container form .form__group input,
#appointment .container form .form__group textarea,
#appointment .container form .form__group select {
    background: #fff;
    padding: 0.85rem 1rem;
    display: block;
    width: 100%;
    border-radius: 0.4rem;
    resize: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
</style>