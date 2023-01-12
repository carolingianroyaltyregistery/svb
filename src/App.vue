<script setup>
</script>

<template>
  <header class="header-top header-bg">
    <!-- <img alt="Vue logo" class="logo" src="./assets/header.svg" width="125" height="125" /> -->
    <div>
      <img alt="Vue logo" class="responsive" src="./assets/header.svg" height="125" />
    </div>

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

    <hr/>

    <div class="info">
      <div class="container">
      <div />
      <div>
        <img alt="Lord Kai C. Bellina" class="logo" src="./assets/shawn.png" width="225"  />
        <img alt="flag" class="logo" src="./assets/Scottish_flag.svg" width="125" height="125" />
        <img alt="flag" class="logo" src="./assets/vegitable_lamb.svg" width="125" height="125" />
      </div>
    </div>
    </div>

    <footer class="footer">
      <div>
        public | view record: As3908409283
      </div>
    </footer>

  </header>

</template>

<style scoped>
hr{
  
  border-color: rgb(143, 1, 1);

}
.info{
  padding:2rem;

}
.footer {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  color: rgb(146, 146, 136);
  height: 60px;
}

.container {
  display: grid;
  grid-template-columns: 10% 1fr 10%;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -.1rem;

}

.responsive {
  max-width: 100%;
  /* width: 100%; */
  /* height: auto; */
}

.header-top {
  position: fixed;
  /* raise z-index to cover */
  z-index: 1;

  /* 100% - .header-wrap can be a percentage - 
         also covers full width when zoomed */
  width: 100%;
}

.header-bg {
  background-color: rgb(107, 3, 3);
}
</style>
