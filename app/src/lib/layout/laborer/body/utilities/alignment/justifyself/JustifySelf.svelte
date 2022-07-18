<script lang="ts">
    import Precode from "src/components/Precode.svelte"
    import Details from "src/components/Details.svelte"
</script>

<section class="d-grid g-4">
    <h3>Justify Self</h3>
    <p>The <b>justify-self-...</b> utilities sets the way a box is justified inside its alignment container along the appropriate axis.</p>
    <p class="color-warning">The properties works only for <b>grid</b> container!</p>
    <div class="d-grid g-2 p-2 bg-positive rounded-md">
        <div class="d-grid g-2">
            <div class="d-grid cols-2 g-2 bg-negative-10 p-2">
                <div class="bg-negative-10 px-2 py-1 justify-self-start">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="d-grid cols-2 g-2 bg-negative-10 p-2">
                <div class="bg-negative-10 px-2 py-1 justify-self-center">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="d-grid cols-2 g-2 bg-negative-10 p-2">
                <div class="bg-negative-10 px-2 py-1 justify-self-end">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="d-grid cols-2 g-2 bg-negative-10 p-2">
                <div class="bg-negative-10 px-2 py-1 justify-self-stretch">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="d-grid cols-2">
<div class="justify-self-start">one</div>
<div>two</div>
<div>three</div>
</div>
<div class="d-grid cols-2">
<div class="justify-self-center">one</div>
<div>two</div>
<div>three</div>
</div>
<div class="d-grid cols-2">
<div class="justify-self-end">one</div>
<div>two</div>
<div>three</div>
</div>
<div class="d-grid cols-2">
<div class="justify-self-stretch">one</div>
<div>two</div>
<div>three</div>
</div>`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>
