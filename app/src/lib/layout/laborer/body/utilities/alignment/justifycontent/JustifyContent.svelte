<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<section class="d-grid g-4">
    <h3>Justify content</h3>
    <p>The <b>justify-content-...</b> properties defines how distributes space between and around content items along the main-axis of a <b>flex</b> container, and the inline axis of a <b>grid</b> container.</p>
    <div class="d-grid g-2 p-2 bg-positive rounded-md">
        <div class="d-grid g-2">
            <div class="d-flex g-2 bg-negative-10 p-2 justify-content-start">
                <div class="bg-negative-10 px-2 py-1">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="d-flex g-2 bg-negative-10 p-2 justify-content-end">
                <div class="bg-negative-10 px-2 py-1">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="d-flex g-2 bg-negative-10 p-2 justify-content-center">
                <div class="bg-negative-10 px-2 py-1">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="d-flex g-2 bg-negative-10 p-2 justify-content-between">
                <div class="bg-negative-10 px-2 py-1">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="d-flex g-2 bg-negative-10 p-2 justify-content-around">
                <div class="bg-negative-10 px-2 py-1">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="d-flex g-2 bg-negative-10 p-2 justify-content-evenly">
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
`<div class="d-flex justify-content-start">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>

<div class="d-flex justify-content-end">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>

<div class="d-flex justify-content-center">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>

<div class="d-flex justify-content-between">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>

<div class="d-flex justify-content-around">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>

<div class="d-flex justify-content-evenly">
    <div>one</div>
    <div>two</div>
    <div>three</div>
</div>`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>