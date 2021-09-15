<script lang="ts">
	import Header from "./header/Header.svelte"
	import Aside from "./aside/Aside.svelte"
	import Body from "./body/Index.svelte"
</script>

<main class="laborer">
    <Header />
    <Aside />
    <Body />
    <!--Modal /-->
</main>

<style lang="sass">
    .laborer
        grid-column: 1/-1
        grid-row: 1/-1
        display: grid
        grid-template-columns: min-content 1fr
        grid-template-rows: min-content 1fr
</style>