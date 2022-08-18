<script lang="ts">
    import Precode from 'component/Precode.svelte'
    import Details from 'component/Details.svelte'
</script>

<section class="d-grid g-2">
    <h3 id="flexSize">Size</h3>
    <p>
        The <b>f-[fill/equal/grow-(0/1)/shrink-(0/1)]</b> classes sets size of items in flex container.
    </p>
    <div class="d-grid g-2 p-2 bgc-positive rounded">
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 f-fill">fill one</div>
            <div class="bgc-negative-10 px-2 py-1">two</div>
            <div class="bgc-negative-10 px-2 py-1">three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 f-equal">equal one</div>
            <div class="bgc-negative-10 px-2 py-1">two</div>
            <div class="bgc-negative-10 px-2 py-1">three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 f-fill">fill one</div>
            <div class="bgc-negative-10 px-2 py-1 f-fill">fill two</div>
            <div class="bgc-negative-10 px-2 py-1 f-fill">fill three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 f-equal">equal one</div>
            <div class="bgc-negative-10 px-2 py-1 f-equal">equal two</div>
            <div class="bgc-negative-10 px-2 py-1 f-equal">equal three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 fg">grow-1 one</div>
            <div class="bgc-negative-10 px-2 py-1">simple two</div>
            <div class="bgc-negative-10 px-2 py-1">simple three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 w-100">w-100 one</div>
            <div class="bgc-negative-10 px-2 py-1 fs">shrink-0 two</div>
            <div class="bgc-negative-10 px-2 py-1">simple three</div>
        </div>
        <div class="d-flex g-2 bgc-negative-10 p-4">
            <div class="bgc-negative-10 px-2 py-1 w-100">w-100 one</div>
            <div class="bgc-negative-10 px-2 py-1 fs">shrink-1 two</div>
            <div class="bgc-negative-10 px-2 py-1">simple three</div>
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
    <div class="f-fill">fill one</div>
    <div>two</div>
    <div>three</div>
</div>
<div class="d-flex">
    <div class="f-equal">equal one</div>
    <div>two</div>
    <div>three</div>
</div>
<div class="d-flex">
    <div class="f-fill">fill one</div>
    <div class="f-fill">fill two</div>
    <div class="f-fill">fill three</div>
</div>
<div class="d-flex">
    <div class="f-equal">equal one</div>
    <div class="f-equal">equal two</div>
    <div class="f-equal">equal three</div>
</div>
<div class="d-flex">
    <div class="fg">grow-1 one</div>
    <div>simple two</div>
    <div>simple three</div>
</div>
<div class="d-flex">
    <div class="w-100">w-100 one</div>
    <div class="fs">shrink-0 two</div>
    <div>simple three</div>
</div>
<div class="d-flex">
    <div class="w-100">w-100 one</div>
    <div class="fs">shrink-1 two</div>
    <div>simple three</div>
</div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>

</section>