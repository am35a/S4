<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<div class="d-grid g-2">
    <h3 id="BorderRadius">Border radius</h3>
    <div class="d-grid g-2 p-2 bg-positive rounded">        
        <div class="d-flex flex-wrap g-4">
            <div class="bg-background border p-2 rounded-0">rounded-0</div>
            <div class="bg-background border p-2 rounded-xxs">rounded-xxs</div>
            <div class="bg-background border p-2 rounded-xs">rounded-xs</div>
            <div class="bg-background border p-2 rounded-sm">rounded-sm</div>
            <div class="bg-background border p-2 rounded-md">rounded-md</div>
            <div class="bg-background border p-2 rounded-lg">rounded-lg</div>
            <div class="bg-background border p-2 rounded-xl">rounded-xl</div>
            <div class="bg-background border p-2 rounded-xxl">rounded-xxl</div>
        </div>
        <div class="d-flex flex-wrap g-4">
            <div class="bg-background border p-5 rounded-circle"></div>
            <div class="bg-background border p-5 rounded-pill" style="width: 16em;"></div>
        </div>
        <div class="d-flex flex-wrap g-4">
            <div class="bg-background border p-5 rounded-circle rounded-left-0"></div>
            <div class="bg-background border p-5 rounded-circle rounded-top-0"></div>
            <div class="bg-background border p-5 rounded-circle rounded-right-0"></div>
            <div class="bg-background border p-5 rounded-circle rounded-bottom-0"></div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="border-0"></div>
<div class="border border-top-0"></div>
<div class="border border-right-0"></div>
<div class="border border-bottom-0"></div>
<div class="border border-left-0"></div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>