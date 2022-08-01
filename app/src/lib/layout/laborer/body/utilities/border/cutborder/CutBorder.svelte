<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<div class="d-grid g-2">
    <h3 id="CutBorder">Cut border</h3>
    <div class="d-grid g-2 p-2 bg-positive rounded-md">
        <div class="d-flex flex-wrap g-4">
            <div class="bg-negative-10 p-6 border border-0"></div>
            <div class="bg-negative-10 p-6 border border-top-0"></div>
            <div class="bg-negative-10 p-6 border border-right-0"></div>
            <div class="bg-negative-10 p-6 border border-bottom-0"></div>
            <div class="bg-negative-10 p-6 border border-left-0"></div>
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