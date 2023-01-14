<script setup>
import { ref, onMounted } from 'vue'

const animClass = ref('wtf')

onMounted(() => {
    setTimeout(function () {
        animClass.value = "hide";
        console.log("WELCOME: Carolingian Royalty Registery")
    }, 5000);
})

</script>

<template>

    <div class='page'>
        <div class='header'>
            <div>
                <img alt="Vue logo" class="responsive" src="./assets/header.svg" height="100" />
            </div>
        </div>

        <div class='content'>
            <article>
                
                <div class="info">
                    <div class="container">
                        <div />
                        <div class="title">
                          Lord Shawn Vincent  Bellina
                        </div>
                        <div />

                        <div />
                        <div>
                            Status: Active
                        </div>
                        <div />

                        <div />
                        <div>
                          ID: EQ561947
                        </div>
                        <div />

                        <div />
                        <div>
                            Credentials Last Issue date: 03 Sep 2022
                        </div>
                        <div />

                    </div>
                </div>

                <hr />
                <div class="info">
                    <div class="container">
                        <div/>
                        
                        <div>
                          <img alt="Lord Kai C. Bellina" class="logo" src="./assets/shawn.png" width="225"  />
                            <img alt="flag" class="logo" src="./assets/Scottish_flag.svg" width="125" height="125" />
                            <img alt="flag" class="logo" src="./assets/vegitable_lamb_black.svg" width="125" height="125" />
                        </div>
                        <div/>
                    </div>
                </div>


            </article>

        </div>
    </div>

    <footer class="footer">
        <div>
            public | view record: As3908817283
        </div>
    </footer>


    <div :class="animClass">
        <div>
            <div class="logo_container">
                <img alt="flag" class="logo" src="./assets/vegitable_lamb.svg" />
            </div>
        </div>
    </div>

</template>


<style scoped>
.title {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -.1rem;
  line-height: 2.5rem;
  padding-bottom: 2.5rem;;

}
.container {
    display: grid;
    grid-template-columns: 10% 1fr 10%;
}

.container-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
hr {

    border-color: rgb(143, 1, 1);

}

.info {
    padding: 2rem;

}

.footer {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    color: rgb(146, 146, 136);
    height: 60px;
}

body {
    margin: 0;
}

.page {
    display: grid;
    grid-template-rows: 100px calc(100vh - 55px);
    /* height limitation on second row */
    grid-template-areas: "header"
        "content";
}

.header {
    grid-area: header;
    background-color: rgb(71, 2, 2);
}

.content {
    grid-area: content;
    background-color: rgb(107, 3, 3);
    overflow: auto;
    /* overflow condition on parent */
}

article {
    height: 500px;
    background-color: rgb(107, 3, 3);
}

.logo_container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.logo {
    width: 50%
}



.wtf {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
}

.wtf div {
    width: 100%;
    height: 100%;
    background: rgb(21, 10, 10);
    animation: up 5s ease-in forwards;
    transform: scaleY(0);
    /* background: rgb(211, 34, 3); */
}

@keyframes up {

    100% {
        transform-origin: top;
        /* transform: scaleY(0);*/
        transform: translateY(100%);
    }

    0% {
        transform-origin: bottom;
        /* transform: scaleY(1); */
        transform: translateY(-0%);
    }
}

.hide {
    visibility: hidden;
}
</style>