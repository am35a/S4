<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
    import Button from "component/Button.svelte"

    let alignSelfArr = {
        grig: 'd-grid cols-2',
        flex: 'd-flex'
    }
    let alignSelf:string = alignSelfArr.grig

</script>

<section class="d-grid g-4">
    <h3>Align self</h3>
    <p>The <b>align-self-...</b> ...</p>
    <div class="d-grid g-2 p-2 bg-positive rounded-md">
        <div class="d-flex g-2">
            {#each Object.entries(alignSelfArr) as [key, value]}
                <Button
                    class="btn-secondary {alignSelf === value ? 'active' : ''}"
                    on:click = {() => alignSelf = value}
                    disabled={alignSelf === value}
                >{key}</Button>
            {/each}
        </div>
        <div class="d-grid g-2">
            <div class="{alignSelf} g-2 bg-negative-10 p-2" style="height: 160rem;">
                <div class="bg-negative-10 px-2 py-1 align-self-start">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="{alignSelf} g-2 bg-negative-10 p-2" style="height: 160rem;">
                <div class="bg-negative-10 px-2 py-1 align-self-center">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="{alignSelf} g-2 bg-negative-10 p-2" style="height: 160rem;">
                <div class="bg-negative-10 px-2 py-1 align-self-end">one</div>
                <div class="bg-negative-10 px-2 py-1">two</div>
                <div class="bg-negative-10 px-2 py-1">three</div>
            </div>
            <div class="{alignSelf} g-2 bg-negative-10 p-2" style="height: 160rem;">
                <div class="bg-negative-10 px-2 py-1 align-self-stretch">one</div>
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
`<div class="${alignSelf}">
    <div class="align-self-start">one</div>
    <div>two</div>
    <div>three</div>
</div>
<div class="${alignSelf}">
    <div class="align-self-center">one</div>
    <div>two</div>
    <div>three</div>
</div>
<div class="${alignSelf}">
    <div class="align-self-end">one</div>
    <div>two</div>
    <div>three</div>
</div>
<div class="${alignSelf}">
    <div class="align-self-stretch">one</div>
    <div>two</div>
    <div>three</div>
</div>`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</section>
