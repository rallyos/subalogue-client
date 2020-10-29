<template>
  <section class="pl-6 pr-4 mb-2 h-100">
    <section class="content-top">
			<b-field>
				<b-input class="gray-input mt-2 mb-4"
					placeholder="Search"
					type="search"
					icon-pack="fal"
					icon="search">
				</b-input>
			</b-field>
    </section>
    <section class="hero grid-container pt-5 px-5 h-100">
      <div class="hero-head">
        <h2>Subscriptions</h2>
        <b-button class="mt-1 ml-3" size="is-small" icon-pack="fal" icon-right="plus" />
      </div>
			<div class="hero-body">
        <grid :cols="cols" :rows="rows"></grid>
      </div>
      <div class="hero-foot">
        <Footer/>
      </div>
		</section>
  </section>
</template>

<script>
import Footer from './Footer.vue'
import Grid from 'gridjs-vue'

export default {
  name: 'Content',
	components: {
		Grid,
		Footer
	},
	data() {
		return {
			cols: ['Name', 'Price'],
			rows: [
				['HBO GO', '7.99'],
				['Netflix', '7.99']
			]
		}
	}
}
</script>

<style scoped>
.content {
}
.content-top {
  background-color: #F5F5F5;
}
.grid-container {
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>
<style>
.gray-input > input{
    background-color: #EDEDED;
    border-color: #EDEDED;
}
</style>
