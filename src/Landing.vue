<template>
  <div class="landing">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <img alt="Subalogue logo" class="ml-6 mt-5 subalogue-logo" src="./assets/logo.png" width="80" height="80">
          <h1 class="subalogue-heading ml-4 mt-5">Subalogue</h1>
        </div>
      </div>
      <div class="level-right">
        <a :href="$root.API_BASE_URL + '/auth/login'" class="sign-in-link mt-6">
          <h2>Sign In <b-icon class="pl-3" pack="far" size="is-medium" icon="user-astronaut"></b-icon></h2>
        </a>
      </div>
    </nav>
    <div class="columns larger-p">
      <div class="column">
        <div class="hero mt-4 pl-6">
          <div class="hero-head">
            <h2 class="is-size-5">Subscription manager that tries to save your <b-icon class="pl-3" size="is-medium" pack="fal" icon="envelope-open-dollar"></b-icon></h2>
          </div>
          <div class="hero-body pt-1 pb-6 px-0">
            <p class="main-text is-size-6-tablet">
              When everything is subscription, it’s often easy forget that you  are paying for services you don’t use. Having a subscription manager by your side can prompt you to “follow the money” more often, and make decisions before the next pay date.</br></br>
              Subalogue will try to help you with this process, and more.
            </p>
          </div>
          <div class="hero-foot has-text-centered">
            <b-button
                tag="a"
                :href="$root.API_BASE_URL + '/auth/login'"
                type="is-primary"
                size="is-large"
                icon-pack="fal"
                icon-right="portal-enter">
                Try it
            </b-button>
          </div>
        </div>
      </div>
      <div class="column">
      </div>
    </div>
    <div class="columns is-centered gradient-bg pt-5 pb-2">
        <div class="column is-3-desktop is-4-tablet has-text-centered feature">
          <a href="https://github.com/shiftingphotons/subalogue" target="_blank" rel="noopener noreferrer" id="gh">
            <b-icon
                class="x-large"
                pack="fab"
                icon="github">
            </b-icon>
            <h2 class="mt-3 mb-2">Open Source</h2>
            <p>Forever</p>
          </a>
        </div>
      <div class="column is-3-desktop is-4-tablet has-text-centered has-white-text feature">
        <b-icon
            class="x-large"
            pack="fal"
            icon="person-dolly">
        </b-icon>
        <h2 class="mt-3 mb-2">Growing slow, but right</h2>
        <p>No overblown features.</br>
        Only the right toolset to help you take the right decisions about your subscriptions.</p>
      </div>
      <div class="column is-3-desktop is-4-tablet has-text-centered has-white-text feature">
        <b-icon
            class="x-large mb-2"
            pack="fal"
            icon="file-download">
        </b-icon>
        <h2 class="mt-3 mb-2">Own your data</h2>
        <p>Subalogue is just a tool.</br>
        You can export your data in any format you want and use it as you wish.</p>
      </div>
    </div>
    <footer class="footerlike pt-4">
      <p class="footer-text has-text-centered pb-2">
        Developed by <a href="https://shiftingphotons.dev" class="has-blue-text has-text-weight-bold" target="_blank" rel="noopener noreferrer">shiftingphotons.dev</a></br>
        👋 Come say Hi <a href="https://twitter.com/shiftingphotons" class="has-blue-text has-text-weight-medium" target="_blank" rel="noopener noreferrer">@shiftingphotons</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Content',
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
html, body {
  background-color: #fff;
}
h1 {
  font-size: 2.0em;
  font-weight: bold;
}
h3 {
  font-size: 1.17em;
  font-weight: bold;
}
.landing {
  height: 100%;
  font-family: 'Inter', sans-serif;
  color: #343534;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: scroll;
  overflow-x: hidden;
}
.subalogue-heading {
  font-size: 2.5em;
  line-height: 80px;
  float: left;
  cursor: default;
}
.subalogue-logo {
  float: left;
}
.sign-in-link {
  color: #343534;
  margin-right: 10rem;
  transition: color 0.3s;
}
.sign-in-link:hover {
  color: #5ED97D;
}
.gradient-bg {
  background: linear-gradient(-50deg, #49c1ff 62%, white 38%);
}
.has-white-text {
  color: #fff;
}
.larger-p {
  padding-bottom: 4em;
}
.x-large {
  font-size: 3.25em;
}
.is-primary {
  background-color: #5ED97D;
  transition: background-color 0.3s;
}
.is-primary:hover {
  background-color: #2ecd3e;
}
.main-text {
  font-size: 1.15em;
}
#gh {
  color: #343534;
}
.has-blue-text {
  color: #5497b9;
}
.footer-text {
  font-size: 0.8em;
}
@media screen and (max-width: 1160px) {
  .gradient-bg {
    background: linear-gradient(-50deg, #49c1ff 68%, white 32%);
  }
}

@media screen and (max-width: 768px) {
  html, body {
    height: initial !important;
  }
  .subalogue-logo {
    width: 50px;
    height: 50px;
    margin-left: 0 !important;
  }
  .subalogue-heading {
    font-size: 2em;
    line-height: 50px;
  }
  .gradient-bg {
    background: #49c1ff;
  }
  #gh {
    color: white;
  }
  .feature {
    color: white;
    margin: 3em 0;
    padding: 0 1.5em;
  }
  .sign-in-link {
    width: 100px;
    margin: 0 auto;
    display: block;
    text-align: center;
  }
  footer {
    height: 50px;
  }
}
</style>
