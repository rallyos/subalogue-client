<template>
  <div class="landing">
    <nav class="level">
			<div class="level-left">
				<div class="level-item">
					<img alt="Subalogue logo" class="ml-5 mt-5 subalogue-logo" src="./assets/logo.png" width="80" height="80">
					<h1 class="subalogue-heading ml-4 mt-5">Subalogue</h1>
				</div>
			</div>
			<div class="level-right">
				<a href="http://localhost:8000/auth/login" class="sign-in-link mt-5"><h2>sign in</h2></a>
			</div>
    </nav>
		<div class="columns larger-p">
      <div class="column has-z-index">
        <div class="hero mt-6 px-5">
          <div class="hero-head">
            <h1>Manage your subscriptions</h1>
          </div>
          <div class="hero-body pt-1 pb-5 px-0">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div class="hero-foot has-text-centered">
            <b-button
                tag="a"
                href="http://localhost:8000/auth/login"
								type="is-primary"
								size="is-large"
								icon-pack="fad"
                icon-right="portal-enter">
                Try it
            </b-button>
          </div>
        </div>
      </div>
      <div class="column">
      </div>
		</div>
		<div class="columns is-centered">
			<div class="column is-3 has-text-centered has-z-index">
				<b-icon
						class="x-large"
						pack="fab"
						icon="github">
				</b-icon>
        <h2 class="mt-3 mb-2">Open Source</h2>
        <p>Forever</p>
			</div>
			<div class="column is-3 has-text-centered has-white-text has-z-index">
				<b-icon
						class="x-large"
						pack="fal"
						icon="person-dolly">
				</b-icon>
        <h2 class="mt-3 mb-2">Growing slow, but right</h2>
        <p>No overblown features.</br>
        Only the right toolset to help you take the right decisions about your subscriptions.</p>
      </div>
			<div class="column is-3 has-text-centered has-white-text has-z-index">
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
		<div class="blue-bg"></div>
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
	height: 100%;
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
  font-family: 'Inter', sans-serif;
  height: 100%;
  color: #343534;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	overflow: hidden;
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
.blue-bg {
	position: fixed;
	right: -800px;
	bottom: -450px;
	width: 1800px;
	height: 900px;
	border-radius: 900px;
	background-color: #49c1ff;
	z-index: 1;
}
.has-z-index {
	z-index: 2;
}
.has-white-text {
	color: #fff;
}
.larger-p {
	padding-bottom: 5.5em;
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
</style>
