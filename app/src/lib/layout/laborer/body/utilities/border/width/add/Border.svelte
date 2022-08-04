<script lang="ts">
    import Precode from "component/Precode.svelte"
    import Details from "component/Details.svelte"
</script>

<div class="d-grid g-2">
    <h3 id="AddBorderWith">Add border</h3>
    <div class="d-grid g-2 p-2 bg-positive rounded">
        <div class="d-flex flex-wrap g-4">
            <div class="bg-negative-10 p-6 border"></div>
            <div class="bg-negative-10 p-6 border-top"></div>
            <div class="bg-negative-10 p-6 border-right"></div>
            <div class="bg-negative-10 p-6 border-bottom"></div>
            <div class="bg-negative-10 p-6 border-left"></div>
        </div>
    </div>
    <Details>
        <svelte:fragment slot="title">
            Code example
        </svelte:fragment>
        <svelte:fragment slot="body">
            <Precode class="rounded-top-0">
                {
`<div class="border"></div>
<div class="border-top"></div>
<div class="border-right"></div>
<div class="border-bottom"></div>
<div class="border-left"></div>
`
                }
            </Precode>
        </svelte:fragment>
    </Details>
</div>