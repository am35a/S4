<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section class="d-grid g-2">
    <h3 id="flexGrow">Grow</h3>
    <p>
        ...
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">--fg: 1 one</div>
            <div class="bgc-negative-10 px-2 py-1">simple two</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">--fg: 1 three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1">simple one</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">--fg: 1 two</div>
            <div class="bgc-negative-10 px-2 py-1">simple three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">--fg: 1 one</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">--fg: 1 two</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">--fg: 1 three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 1">--fg: 1 one</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 2">--fg: 2 two</div>
            <div class="f bgc-negative-10 px-2 py-1" style="--fg: 3">--fg: 3 three</div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="d-flex">
    <div class="fg" style="--fg: 1">one</div>
    <div>simple two</div>
    <div class="fg" style="--fg: 1">three</div>
</div>
<div class="d-flex g-2 bgc-negative-10 p-4">
    <div>simple one</div>
    <div class="fg" style="--fg: 1">two</div>
    <div>simple three</div>
</div>
<div class="d-flex g-2 bgc-negative-10 p-4">
    <div class="fg" style="--fg: 1">one</div>
    <div class="fg" style="--fg: 1">two</div>
    <div class="fg" style="--fg: 1">three</div>
</div>
<div class="d-flex g-2 bgc-negative-10 p-4">
    <div class="fg" style="--fg: 1">one</div>
    <div class="fg" style="--fg: 2">two</div>
    <div class="fg" style="--fg: 3">three</div>
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>