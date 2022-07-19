<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<section class="d-grid g-4">
    <h3>Justify Items</h3>
    <p>The <b>justify-items-...</b> property work for all items inside container, giving them all a default way of justifying each box along the appropriate axis.</p>
    <p class="color-warning">The properties works only for <b>grid</b> container!</p>
    <div class="d-grid g-2 p-2 bg-positive rounded-md">
        <div class="d-grid g-2">
            <div class="d-grid cols-2 g-2 bg-negative-10 p-2 justify-items-start">
                <div class="bg-negative-10 px-2 py-1">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="d-grid cols-2 g-2 bg-negative-10 p-2 justify-items-center">
                <div class="bg-negative-10 px-2 py-1">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="d-grid cols-2 g-2 bg-negative-10 p-2 justify-items-end">
                <div class="bg-negative-10 px-2 py-1">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="d-grid cols-2 g-2 bg-negative-10 p-2 justify-items-stretch">
                <div class="bg-negative-10 px-2 py-1">one</div>
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
`<div class="d-grid cols-2 justify-items-start">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>

<div class="d-grid cols-2 justify-items-end">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>

<div class="d-grid cols-2 justify-items-center">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>

<div class="d-grid cols-2 justify-items-stretch">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>